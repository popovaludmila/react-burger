import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderDetailStyles from './order-detail.module.css';

export const OrderDetailPage = () => {
    return (
        <>
            <div className="container">
                <div className={`${orderDetailStyles.wrapper} mt-30`}>

                <div className={orderDetailStyles.main}>
                    <p className={`${orderDetailStyles.number} text text_type_digits-default`}>#034533</p>
                    <h3 className="text text_type_main-medium mt-10 mb-3">Black Hole Singularity острый бургер</h3>
                    <span className={`${orderDetailStyles.status} text text_type_main-default`}>Выполнен</span>

                    <div className={`${orderDetailStyles.details} mt-15`}>
                        <p className="text text_type_main-medium mb-6" >Состав:</p>
                        <div className={`${orderDetailStyles.content} mb-10`}> 
                            <ul className="pr-6">
                                <li className={`${orderDetailStyles.item} `}>
                                    <div className={`${orderDetailStyles.image} mr-4`}>
                                        <img alt=""></img>
                                    </div>

                                    <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
                                    <p className={`${orderDetailStyles.price} text text_type_digits-default pl-4 pr-2`}>
                                        <span className="pr-2">2</span>
                                        <span>x</span>
                                        <span className="pl-2">20</span>
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </li>
                            </ul>
                        </div>
                        <div className={orderDetailStyles.total}>
                            <span className="text text_type_main-default text_color_inactive">Вчера, 13:50</span>
                            <div className={orderDetailStyles.total_price}>
                                <span className="text text_type_digits-default pr-2">20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}