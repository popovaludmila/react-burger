import { useEffect } from 'react';
import { OrderList } from '../../components/order-list/order-list';
import { OrdersBoard } from '../../components/orders-board/orders-board';
import { useDispatch } from '../../hooks/hooks';
import { orderFeedConnectStart, orderFeedWsClose } from '../../services/actions/order-feed';
import orderFeedStyles from './order-feed.module.css';
import { WS_URL, ALL } from '../../utils/data';

export const OrderFeedPage = (): JSX.Element => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderFeedConnectStart(`${WS_URL}/${ALL}`))
        return () => {
          dispatch(orderFeedWsClose())
        }
      }, [dispatch]);

    return (
        <main>
            <div className="container">
                <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
                <div className={orderFeedStyles.main}>
                    <OrderList />
                    <OrdersBoard />
                </div>
            </div> 
        </main>
    )
}