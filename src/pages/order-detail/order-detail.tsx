import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrderInfo } from '../../components/order-info/order-info';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { orderFeedConnectStart, orderFeedWsClose } from '../../services/actions/order-feed';
import { userOrdersConnectStart, userOrdersWsClose } from '../../services/actions/user-orders';
import { ALL, WS_URL } from '../../utils/data';
import orderDetailStyles from './order-detail.module.css';

type TOrderDetailPageProps = {
    isAuth: boolean;
}

export const OrderDetailPage = ({isAuth}: TOrderDetailPageProps): JSX.Element | null => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];
       
        isAuth ? 
        dispatch(userOrdersConnectStart(`${WS_URL}?token=${accessToken}`)):
        dispatch(orderFeedConnectStart(`${WS_URL}/${ALL}`))
        return () => {
            isAuth ? 
            dispatch(userOrdersWsClose()) :
            dispatch(orderFeedWsClose())
        }
    }, [dispatch, isAuth]);

    
    const {id} = useParams();

    const feedOrders = useSelector(state => state.orderFeed.orders);
    const userOrders = useSelector(state => state.userOrders.orders);

    const orders = isAuth ? userOrders : feedOrders;

    const order = orders.find((item) => item._id === id);

   

    if (!order) {
        return null;
    } 

    return (
        <>
            <div className="container">
                <div className={`${orderDetailStyles.wrapper} mt-30`}>
                    <OrderInfo isAuth={null} isModal={false} />
                </div>
            </div>
        </>
    )
}