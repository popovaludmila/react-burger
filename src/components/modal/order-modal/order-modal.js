import orderModalStyles from './order-modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import doneIcon from '../../../images/done.png';
import PropTypes from 'prop-types';

const OrderModal = ({onClose, orderNumber}) => {
   return (
            <div>
                <button onClick={onClose} className={`${orderModalStyles.close}`}>
                    <CloseIcon type="primary" />
                </button>
                <div className={`${orderModalStyles.content} p-25 pt-29 pb-29`}>
                    <p className="text text_type_digits-large">{orderNumber}</p>
                    <p className="text text_type_main-medium pt-8 pb-15">идентификатор заказа</p>
                    <img src={doneIcon} width="120" height="120" alt="Готовность заказа" />
                    <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        )
}

OrderModal.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default OrderModal;