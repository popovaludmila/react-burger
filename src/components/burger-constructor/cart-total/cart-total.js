import { useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cartTotalStyles from './cart-total.module.css';
import Modal from '../../modal/modal';
import OrderModal from '../../modal/order-modal/order-modal';
import PropTypes from 'prop-types';
import { sendData } from '../../../utils/data-api';
import { cartPropTypes } from '../../../utils/prop-types';

const CartTotal = ({total, cart}) => {
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [orderNumber, setOrderNumber] = useState("");

    const onOrderButtonClick = (e) => {
        e.preventDefault();

        const orderIngredients = [
            cart.top._id,
            ...cart.fillings.map((ingredient) => ingredient._id),
            cart.bottom._id,
        ];
       
        sendData(
            (data) => {
                setOrderNumber(data.order.number)
                setShowOrderModal(true);
            },
            () => {
                alert("Произошла ошибка отправки данных...")
            },
            JSON.stringify({"ingredients": orderIngredients})
        )
    };

    const onCloseClick= () => {
        setShowOrderModal(false);
    };

    return (
        <div className={`${cartTotalStyles.wrapper} pt-6`}>
            <div className={`${cartTotalStyles.price} mr-10`}>
                <span className="text text_type_digits-medium mr-2">{total}</span>
                <CurrencyIcon type="primary" />
            </div>
            
            <Button htmlType="submit" type="primary" size="medium" onClick={onOrderButtonClick}>Оформить заказ</Button>
            {showOrderModal && 
                <Modal onOverlayClick={onCloseClick} onCloseClick={onCloseClick} modalTitle={''}>
                    <OrderModal orderNumber={orderNumber} />
                </Modal>
            }
        </div>
    )
}

CartTotal.propTypes = {
    total: PropTypes.number.isRequired,
    cart: cartPropTypes.isRequired
}


export default CartTotal;