import { useSelector } from "../../hooks/hooks";
import { CardOrder } from "../card-order/card-order"
import orderListStyles from './order-list.module.css';

export const OrderList = (): JSX.Element => {
    const orders = useSelector(state => state.orderFeed.orders);
    console.log(orders)
    const cardOrders =  orders.map((order) => (
        <CardOrder key={order._id} order = {order} />
    ))
    return (
        <>
            <section className={orderListStyles.wrapper}>
                <div className={orderListStyles.main}>
                    <ul className="mr-2">
                        {cardOrders}
                    </ul>
                </div>
            </section>
        </>
    )
}