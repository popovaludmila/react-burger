import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderDetailStyles from './order-detail.module.css';

export const OrderDetailPage = () => {
    return (
        <>
            <div className="container">
                <div className={orderDetailStyles.wrapper}>

                <div>
                    <p>#034533</p>
                    <h3>Black Hole Singularity острый бургер</h3>
                    <span></span>

                    <div>
                        <p>Состав:</p>
                        <div>
                            <ul>
                                <li>
                                    <div className={orderDetailStyles.image}>
                                        <img alt=""></img>
                                    </div>

                                    <p>Флюоресцентная булка R2-D3</p>
                                    <p>
                                        <span>2</span>
                                        <span>x</span>
                                        <span>20</span>
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}