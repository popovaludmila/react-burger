import { useSelector } from '../../hooks/hooks';
import ordersBoardStyles from './orders-board.module.css';

type TOrdersBoardProps = {
    pendingOrderNumbers: Array<number>;
    doneOrderNumbers: Array<number>;
}
export const OrdersBoard = ({pendingOrderNumbers, doneOrderNumbers}: TOrdersBoardProps): JSX.Element => {

    const total = useSelector(state => state.orderFeed.total);
    const totalToday = useSelector(state => state.orderFeed.totalToday);

    return (
        <>
            <section className={ordersBoardStyles.main}>
                <div className={ordersBoardStyles.wrapper}>
                    <div className={`${ordersBoardStyles.orders_list} mb-15`}>
                        <div className={ordersBoardStyles.board}>
                            <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                            <ul className={`${ordersBoardStyles.list} text text_type_digits-default`}>
                                {doneOrderNumbers.map((item, index) => {
                                    return (
                                        <li key={index} className={`${ordersBoardStyles.done} pb-1 pr-3`}>{`0${item}`}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={ordersBoardStyles.board}>
                            <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                            <ul className={`${ordersBoardStyles.list} text text_type_digits-default`}>
                                {pendingOrderNumbers.map((item, index) => {
                                    return (
                                        <li key={index} className="pb-1 pr-3">{`0${item}`}</li>
                                    )
                                })}
                                
                            </ul>
                        </div>
                    </div>
                    

                    <div className="mb-15">
                        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                        <span className="text text_type_digits-large">{total}</span>
                    </div>
                    <div>
                        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                        <span className="text text_type_digits-large">{totalToday}</span>
                    </div>
                </div>
            </section>
        </>
    )
}