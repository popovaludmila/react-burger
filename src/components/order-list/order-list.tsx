import { IOrderType } from "../../types/types";
import { CardOrder } from "../card-order/card-order"
import orderListStyles from './order-list.module.css';

type TOrderListProps = {
    orders: IOrderType[];
    page: string;
    isProfile: boolean;
}

export const OrderList = ({orders, page, isProfile}: TOrderListProps): JSX.Element => {
    
    const cardOrders =  orders.map((order) => (
        <CardOrder navPage={page} key={order._id} order = {order} />
    ))

    const wrapper = isProfile ? {width: "100%", maxWidth: "100%"} : {width: "50%", maxWidth: "600px"};
    return (
        <>
            <section className={orderListStyles.wrapper} style={wrapper}>
                <div className={orderListStyles.main}>
                    <ul className="mr-2">
                        {cardOrders}
                    </ul>
                </div>
            </section>
        </>
    )
}