import orderModalStyles from './order-modal.module.css';
//import {done} from '../../../images/done.png';

const OrderModal = () => {
    return (
        <div className={`${orderModalStyles.container}`}>
            <button className={`${orderModalStyles.close}`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#F2F2F3"/>
                </svg>
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