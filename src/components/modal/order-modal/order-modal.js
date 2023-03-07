import orderModalStyles from './order-modal.module.css';
//import { useState } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
//import {done} from '../../../images/done.png';



const OrderModal = ({onClose}) => {
   return (
            <div>
                <button onClick={onClose} className={`${orderModalStyles.close}`}>
                    <CloseIcon type="primary" />
                </button>
                <div className={`${orderModalStyles.content} p-25 pt-29 pb-29`}>
                    <p className="text text_type_digits-large">034567</p>
                    <p className="text text_type_main-medium pt-8 pb-15">идентификатор заказа</p>
                    <img   width="120" height="120" alt="Готовность заказа" />
                    <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        )
}


export default OrderModal;