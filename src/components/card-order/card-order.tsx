import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../hooks/hooks";
import { IOrderType, TIngredientData } from "../../types/types";
import { CardOrderIngredients } from "../card-order-ingredients/card-order-ingredients";
import cardOrderStyles from './card-order.module.css';

type TCardOrderProps = {
    order: IOrderType;
}

export const CardOrder = ({order}: TCardOrderProps): JSX.Element => {

    const burgerIngredientsData = useSelector(state => state.constructorBurger.ingredients);
    const {number, name, ingredients, createdAt} = order;

    const orderNumber = `#0${number}`;
    const getOrderIngredients = () => {
        const elements: TIngredientData[] = [];

        ingredients.forEach((ingredientId) => {

            burgerIngredientsData.forEach((ingredient: TIngredientData) => {
            if (ingredient._id === ingredientId) {
                elements.push(ingredient);
            }
            });
      });
  
      return elements;
    }

    const orderIngredients = getOrderIngredients();

    return (
        <li className={`${cardOrderStyles.wrapper} p-6 mb-4 mr-4`}>
            <div className={`${cardOrderStyles.order_number} pb-6`}>
                <p className="text text_type_digits-default">{orderNumber}</p>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(createdAt)} /> 
                </p>
            </div>
            <p className="text text_type_main-medium pb-6">{name}</p>
            <CardOrderIngredients orderIngredients = {orderIngredients} />
        </li>
    )
}