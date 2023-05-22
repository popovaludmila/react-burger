import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMatch } from "react-router-dom";
import { useSelector } from "../../hooks/hooks";
import { TIngredientData } from "../../types/types";
import { fillOrderIngredients } from "../../utils/order-ingredients";
import { OrderItem } from "../order-item/order-item";
import orderInfoStyles from "./order-info.module.css";

type TOrderInfoProps = {
    isModal: boolean;
}
export const OrderInfo = ({isModal}: TOrderInfoProps): JSX.Element | null => {
    const match = useMatch("/feed/:id");
    const id = match?.params.id;

    const orders = useSelector(state => state.orderFeed.orders);
   
    const burgerIngredientsData = useSelector(state => state.constructorBurger.ingredients);

    const order = orders.find((item) => item._id === id);
    
    if (!order) {
        return null;
    } 
    const modal = isModal ? {backgroundColor: "#1C1C21", borderRadius: "40px"} : 
        {backgroundColor: "#131316", borderRadius: "0"};
        
    const {number, name, ingredients, createdAt} = order;
    
    const orderNumber = `#0${number}`;
    const orderIngredients = fillOrderIngredients(ingredients, burgerIngredientsData);

    const totalPrice = orderIngredients.reduce((count, item) => {
        return count + item.price;
    }, 0);
    
    const counter = (ingredient: TIngredientData) => {
        let counter = 0;
        orderIngredients.forEach((el) => {
          if (el._id === ingredient._id) {
            counter += 1;
          }
        })
        return counter;
      }
    
      const orderIngredientsList = Array.from(new Set(orderIngredients));
    

    return (
        <>
            <div className={`${orderInfoStyles.main} p-10 pb-15`} 
            style={modal}>
                <p className={`${orderInfoStyles.number} text text_type_digits-default`}>{orderNumber}</p>
                <h3 className="text text_type_main-medium mt-10 mb-3">{name}</h3>
            
                    <span className={`${orderInfoStyles.status} text text_type_main-default`}>Выполнен</span>
                
                <div className={`${orderInfoStyles.details} mt-15`}>
                    <p className="text text_type_main-medium mb-6" >Состав:</p>
                    <div className={`${orderInfoStyles.content} mb-10`}> 
                        <ul className="pr-6">
                            {orderIngredientsList.map((ingredient, index) => {
                                return (
                                    <OrderItem key={index} orderIngredient={ingredient} count={counter(ingredient)} /> 
                                )
                            })}
                        </ul>
                    </div>
                    <div className={orderInfoStyles.total}>
                        <span className="text text_type_main-default text_color_inactive">
                            <FormattedDate date={new Date(createdAt)} /> 
                        </span>
                        <div className={orderInfoStyles.total_price}>
                            <span className="text text_type_digits-default pr-2">{totalPrice}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}