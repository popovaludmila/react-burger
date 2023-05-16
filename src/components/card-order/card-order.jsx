import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { OrderIngredient } from "../order-ingredient/order-ingredient";
import cardOrderStyles from './card-order.module.css';

export const CardOrder = () => {
    return (
        <>
            <div className={`${cardOrderStyles.wrapper} p-6 mb-4 mr-4`}>
                <div className={`${cardOrderStyles.order_number} pb-6`}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20</p>
                </div>
                <p className="text text_type_main-medium pb-6">Death Star Starship Main бургер</p>
                <div className={cardOrderStyles.info}>
                    <ul className={cardOrderStyles.ingredients}>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                        <li className={cardOrderStyles.item}>
                            <OrderIngredient />
                        </li>
                    </ul>
                    <div className={`${cardOrderStyles.price} pl-6 text text_type_digits-default`}> 
                        <span className="pr-2">480</span>
                        <CurrencyIcon type="primary" />
                    </div>
                   
                </div>
            </div>
        </>
    )
}