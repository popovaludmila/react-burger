//import { useState } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cartTotalStyles from './cart-total.module.css';
//import OrderModal from '../../modal/order-modal/order-modal';

const CartTotal = ({total}) => {
    // const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    // const onSubmitClick = () => {
    //     setIsOrderModalOpen(true);
    // }



    return (
        <div className={`${cartTotalStyles.wrapper} pt-6`}>
            <div className={`${cartTotalStyles.price} mr-10`}>
                <span className="text text_type_digits-medium mr-2">{total}</span>
                <CurrencyIcon type="primary" />
            </div>
            
            <Button htmlType="submit" type="primary" size="medium">Оформить заказ</Button>
            {/* {!isOrderModalOpen && 
                <OrderModal onClose={() => setIsOrderModalOpen(false)}/>
            } */}
        </div>
    )
}

export default CartTotal;