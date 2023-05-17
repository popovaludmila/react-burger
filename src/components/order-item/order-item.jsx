import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import orderItemStyles from "./order-item.module.css";

export const OrderItem = () => {
    return (
        <li className={`${orderItemStyles.item} pb-4`}>
            <div className={`${orderItemStyles.image} mr-4`}>
                <img alt=""></img>
            </div>

            <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
            <p className={`${orderItemStyles.price} text text_type_digits-default pl-4 pr-2`}>
                <span className="pr-2">2</span>
                <span>x</span>
                <span className="pl-2">20</span>
            </p>
            <CurrencyIcon type="primary" />
        </li>
    )
}