import { CardOrder } from '../../components/card-order/card-order';
import { useSelector } from '../../hooks/hooks';
import ordersStyles from './orders.module.css';

export const OrdersPage = (): JSX.Element => {

    const orders = useSelector(state => state.orderFeed.orders);
    
    const cardOrders =  orders.map((order) => (
        <CardOrder key={order._id} order = {order} />
    ))
    return (
        <>
        <div className={ordersStyles.wrapper}>
            <div className={`${ordersStyles.main} pr-2`}>
                <ul>
                    {cardOrders}
                </ul>
            </div>
           
        </div>
        </>
    )
}