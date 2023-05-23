import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation, useMatch} from "react-router-dom";
import { useSelector } from "../../hooks/hooks";
import { IOrderType} from "../../types/types";
import { fillOrderIngredients, getOrderStatus, getStatusTextColor } from "../../utils/orders-api";
import { CardOrderIngredients } from "../card-order-ingredients/card-order-ingredients";
import cardOrderStyles from './card-order.module.css';

type TCardOrderProps = {
    order: IOrderType;
    navPage: string;
}

export const CardOrder = ({order, navPage}: TCardOrderProps): JSX.Element => {

    const location = useLocation();
    const matchProfile = useMatch("/profile/*");
    const burgerIngredientsData = useSelector(state => state.constructorBurger.ingredients);

    const {number, name, ingredients, createdAt, _id} = order;
    const orderNumber = `#0${number}`;

    const orderStatus = getOrderStatus(order);
    const statusTextColor = getStatusTextColor(orderStatus);
    const orderIngredients = fillOrderIngredients(ingredients, burgerIngredientsData);

    return (
        <Link to={ `/${navPage}/${_id}`} state={{background: location}} className={`${cardOrderStyles.wrapper} p-6 mb-4 mr-4`}>
            <div className={`${cardOrderStyles.order_number} pb-6`}>
                <p className="text text_type_digits-default">{orderNumber}</p>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(createdAt)} /> 
                </p>
            </div>
            <p className="text text_type_main-medium">{name}</p>
            {matchProfile ?
                <span style={statusTextColor} className="text text_type_main-default pt-2">{orderStatus}</span> : null }
            <CardOrderIngredients orderIngredients = {orderIngredients} />
        </Link>
    )
}