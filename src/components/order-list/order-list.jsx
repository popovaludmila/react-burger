import { CardOrder } from "../card-order/card-order"
import orderListStyles from './order-list.module.css';

export const OrderList = () => {

    return (
        <>
            <section className={orderListStyles.wrapper}>
                <div className={orderListStyles.main}>
                    <ul className="mr-2">
                        <CardOrder />

                        <CardOrder />

                        <CardOrder />
                    </ul>
                </div>
            </section>
        </>
    )
}