import orderModalStyles from './order-modal.module.css';
import doneIcon from '../../../images/done.png';

type TOrderModalProps = {
    orderNumber: number;
}
const OrderModal = ({orderNumber}: TOrderModalProps): JSX.Element => {
   return (
            <> 
                <div className={`${orderModalStyles.content} p-25 pt-29 pb-29`}>
                    <p data-test="order_number" className="text text_type_digits-large">{orderNumber}</p>
                    <p className="text text_type_main-medium pt-8 pb-15">идентификатор заказа</p>
                    <img src={doneIcon} width="120" height="120" alt="Готовность заказа" />
                    <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                </div>
            </>
        )
}

export default OrderModal;