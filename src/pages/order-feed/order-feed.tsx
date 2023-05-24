import { useEffect } from 'react';
import { OrderList } from '../../components/order-list/order-list';
import { OrdersBoard } from '../../components/orders-board/orders-board';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { orderFeedConnectStart, orderFeedWsClose } from '../../services/actions/order-feed';
import orderFeedStyles from './order-feed.module.css';
import { WS_URL, ALL, FEED } from '../../utils/data';

export const OrderFeedPage = (): JSX.Element => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderFeedConnectStart(`${WS_URL}/${ALL}`))
        return () => {
          dispatch(orderFeedWsClose())
        }
      }, [dispatch]);

    const orders = useSelector(state => state.orderFeed.orders);
    const doneOrderNumbers = orders.filter((order) => order.status === 'done')
      .map((order) => order.number)

    const pendingOrderNumbers = orders.filter((order) => order.status === 'pending')
        .map((order) => order.number)

    const page = FEED;
    
    return (
        <main>
            <div className="container">
                <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
                <div className={orderFeedStyles.main}>
                    <OrderList isProfile={false} page={page} orders={orders} />
                    <OrdersBoard doneOrderNumbers={doneOrderNumbers} pendingOrderNumbers={pendingOrderNumbers} />
                </div>
            </div> 
        </main>
    )
}