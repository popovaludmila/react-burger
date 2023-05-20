import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMatch } from "react-router-dom";
import { useSelector } from "../../hooks/hooks";
import { fillOrderIngredients } from "../../utils/order-ingredients";
import { OrderItem } from "../order-item/order-item";
import orderInfoStyles from "./order-info.module.css";

export const OrderInfo = ({isLogin}) => {
    const match = useMatch("/feed/:id");
    const id = match?.params.id;

    const orders = useSelector(state => state.orderFeed.orders);
    const burgerIngredientsData = useSelector(state => state.constructorBurger.ingredients);

    const order = orders.find(order => order._id === id);

    if (!order) {
        return null;
    } 

    const {number, name, ingredients, createdAt} = order;

    const orderNumber = `#0${number}`;
    const orderIngredients = fillOrderIngredients(ingredients, burgerIngredientsData);
    
    return (
        <div className={`${orderInfoStyles.main} p-10 pb-15 pt-25`}>
            <p className={`${orderInfoStyles.number} text text_type_digits-default`}>{orderNumber}</p>
            <h3 className="text text_type_main-medium mt-10 mb-3">{name}</h3>
            {isLogin && 
                <span className={`${orderInfoStyles.status} text text_type_main-default`}>Выполнен</span>
            }
            <div className={`${orderInfoStyles.details} mt-15`}>
                <p className="text text_type_main-medium mb-6" >Состав:</p>
                <div className={`${orderInfoStyles.content} mb-10`}> 
                    <ul className="pr-6">
                        {orderIngredients?.map(ingredient => {
                            return (
                                <OrderItem orderIngredient={ingredient} count={1111} /> 
                            )
                        })}
                    </ul>
                </div>
                <div className={orderInfoStyles.total}>
                    <span className="text text_type_main-default text_color_inactive">
                        <FormattedDate date={new Date(createdAt)} /> 
                    </span>
                    <div className={orderInfoStyles.total_price}>
                        <span className="text text_type_digits-default pr-2">20</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}