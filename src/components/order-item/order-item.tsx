import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientData } from "../../types/types";
import orderItemStyles from "./order-item.module.css";

type TOrderItemProps = {
    orderIngredient: TIngredientData;
    count: number;
}
export const OrderItem = ({orderIngredient, count}: TOrderItemProps): JSX.Element => {

    const {name, price, image_mobile} = orderIngredient;

    return (
        <li className={`${orderItemStyles.item} pb-4`}>
            <div className={`${orderItemStyles.image} mr-4`}>
                <img className={orderItemStyles.img} src={image_mobile} alt={name} />
            </div>

            <p className="text text_type_main-default">{name}</p>
            <p className={`${orderItemStyles.price} text text_type_digits-default pl-4 pr-2`}>
                <span className="pr-2">{count}</span>
                <span>x</span>
                <span className="pl-2">{price}</span>
            </p>
            <CurrencyIcon type="primary" />
        </li>
    )
}