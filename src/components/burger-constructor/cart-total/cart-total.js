import { useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cartTotalStyles from './cart-total.module.css';
import Modal from '../../modal/modal';
import OrderModal from '../../modal/order-modal/order-modal';

const CartTotal = ({total}) => {
     const [showOrderModal, setShowOrderModal] = useState(false);

     const onOrderButtonClick = (e) => {
        e.preventDefault();
        setShowOrderModal(true);
     }

     const onCloseButtonClick= () => {
        setShowOrderModal(false);
     }

    return (
        <div className={`${cartTotalStyles.wrapper} pt-6`}>
            <div className={`${cartTotalStyles.price} mr-10`}>
                <span className="text text_type_digits-medium mr-2">{total}</span>
                <CurrencyIcon type="primary" />
            </div>
            
            <Button htmlType="submit" type="primary" size="medium" onClick={onOrderButtonClick}>Оформить заказ</Button>
            {showOrderModal && 
                <Modal>
                    <OrderModal onClose={onCloseButtonClick}/>
                </Modal>
            }
        </div>
    )
}

export default CartTotal;