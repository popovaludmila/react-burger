import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderItem } from "../order-item/order-item";
import orderInfoStyles from "./order-info.module.css";

export const OrderInfo = () => {
    return (
        <div className={orderInfoStyles.main}>
            <p className={`${orderInfoStyles.number} text text_type_digits-default`}>#034533</p>
            <h3 className="text text_type_main-medium mt-10 mb-3">Black Hole Singularity острый бургер</h3>
            <span className={`${orderInfoStyles.status} text text_type_main-default`}>Выполнен</span>

            <div className={`${orderInfoStyles.details} mt-15`}>
                <p className="text text_type_main-medium mb-6" >Состав:</p>
                <div className={`${orderInfoStyles.content} mb-10`}> 
                    <ul className="pr-6">
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        
                    </ul>
                </div>
                <div className={orderInfoStyles.total}>
                    <span className="text text_type_main-default text_color_inactive">Вчера, 13:50</span>
                    <div className={orderInfoStyles.total_price}>
                        <span className="text text_type_digits-default pr-2">20</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}