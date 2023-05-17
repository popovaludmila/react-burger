import { OrderInfo } from '../../components/order-info/order-info';
import orderDetailStyles from './order-detail.module.css';

export const OrderDetailPage = () => {
    return (
        <>
            <div className="container">
                <div className={`${orderDetailStyles.wrapper} mt-30`}>

                   <OrderInfo />

                </div>
            </div>
        </>
    )
}