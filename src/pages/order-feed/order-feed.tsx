import { OrderList } from '../../components/order-list/order-list';
import { OrdersBoard } from '../../components/orders-board/orders-board';
import orderFeedStyles from './order-feed.module.css';

export const OrderFeedPage = (): JSX.Element => {
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