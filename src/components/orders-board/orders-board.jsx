import ordersBoardStyles from './orders-board.module.css';

export const OrdersBoard = () => {
    return (
        <>
            <section className={ordersBoardStyles.main}>
                <div className={ordersBoardStyles.wrapper}>
                    <div className={`${ordersBoardStyles.orders_list} pb-15`}>
                        <div className={ordersBoardStyles.board}>
                            <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                            <ul className={`${ordersBoardStyles.list} text text_type_digits-default`}>
                                <li className={`${ordersBoardStyles.done} pb-1 pr-4`}>034533</li>
                            </ul>
                        </div>
                        <div className={ordersBoardStyles.board}>
                            <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                            <ul className={`${ordersBoardStyles.list} text text_type_digits-default`}>
                                <li className="pb-1 pr-4">034533</li>
                            </ul>
                        </div>
                    </div>
                    

                    <div className="mb-15">
                        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                        <span className="text text_type_digits-large">28 752</span>
                    </div>
                    <div>
                        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                        <span className="text text_type_digits-large">138</span>
                    </div>
                </div>
            </section>
        </>
    )
}