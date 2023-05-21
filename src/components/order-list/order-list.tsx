import { IOrderType } from "../../types/types";
import { CardOrder } from "../card-order/card-order"
import orderListStyles from './order-list.module.css';

type TOrderListProps = {
    orders: IOrderType[];
    page: string;
}

export const OrderList = ({orders, page}: TOrderListProps): JSX.Element => {
    
    const cardOrders =  orders.map((order) => (
        <CardOrder navPage={page} key={order._id} order = {order} />
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