import { useEffect } from 'react';
import { OrderList } from '../../components/order-list/order-list';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { userOrdersConnectStart, userOrdersWsClose } from '../../services/actions/user-orders';
import { ORDERS, PROFILE, WS_URL } from '../../utils/data';
//import ordersStyles from './orders.module.css';

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
    const page = `${PROFILE}/${ORDERS}`;

    return (
        <>
            {orders ? 
                 <OrderList page={page} orders={orders} />
                 :
                <h1 className="text text_type_main-medium">Здесь будут ваши заказы</h1>
            }
        </>
    )
}