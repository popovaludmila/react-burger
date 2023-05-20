import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../hooks/hooks";
import { IOrderType} from "../../types/types";
import { FEED } from "../../utils/data";
import { fillOrderIngredients } from "../../utils/order-ingredients";
import { CardOrderIngredients } from "../card-order-ingredients/card-order-ingredients";
import cardOrderStyles from './card-order.module.css';

type TCardOrderProps = {
    order: IOrderType;
}

export const CardOrder = ({order}: TCardOrderProps): JSX.Element => {
    const location = useLocation();
    const burgerIngredientsData = useSelector(state => state.constructorBurger.ingredients);
    const {number, name, ingredients, createdAt, _id} = order;

    const orderNumber = `#0${number}`;


    const orderIngredients = fillOrderIngredients(ingredients, burgerIngredientsData);

    return (
        <Link to={ `/${FEED}/${_id}`} state={{background: location}} className={`${cardOrderStyles.wrapper} p-6 mb-4 mr-4`}>
            <div className={`${cardOrderStyles.order_number} pb-6`}>
                <p className="text text_type_digits-default">{orderNumber}</p>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(createdAt)} /> 
                </p>
            </div>
            <p className="text text_type_main-medium pb-6">{name}</p>
            <CardOrderIngredients orderIngredients = {orderIngredients} />
        </Link>
    )
}