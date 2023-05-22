import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { OrderInfo } from '../../components/order-info/order-info';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { orderFeedConnectStart, orderFeedWsClose } from '../../services/actions/order-feed';
import { ALL, WS_URL } from '../../utils/data';
import orderDetailStyles from './order-detail.module.css';

export const OrderDetailPage = (): JSX.Element | null => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderFeedConnectStart(`${WS_URL}/${ALL}`))
        return () => {
          dispatch(orderFeedWsClose())
        }
    }, [dispatch]);

    const match = useMatch("/feed/:id");
    const id = match?.params.id;

    const orders = useSelector(state => state.orderFeed.orders);
   
    const order = orders.find((item) => item._id === id);
    
    if (!order) {
        return null;
    } 

    return (
        <>
            <div className="container">
                <div className={`${orderDetailStyles.wrapper} mt-30`}>
                    <OrderInfo isModal={false} />
                </div>
            </div>
        </>
    )
}