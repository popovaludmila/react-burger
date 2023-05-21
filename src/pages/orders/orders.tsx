import { useEffect } from 'react';
import { CardOrder } from '../../components/card-order/card-order';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { userOrdersConnectStart, userOrdersWsClose } from '../../services/actions/user-orders';
import { WS_URL } from '../../utils/data';
import ordersStyles from './orders.module.css';

export const OrdersPage = (): JSX.Element => {

    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];
        dispatch(userOrdersConnectStart(`${WS_URL}?token=${accessToken}`))
        return () => {
          dispatch(userOrdersWsClose())
        }
      }, [dispatch]);

    const orders = useSelector(state => state.userOrders.orders);
    
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