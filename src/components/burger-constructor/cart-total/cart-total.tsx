import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cartTotalStyles from './cart-total.module.css';
import Modal from '../../modal/modal';
import OrderModal from '../../modal/order-modal/order-modal';
import {  cleanCart, createOrder } from '../../../services/actions';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/data';
import { useDispatch, useSelector } from '../../../hooks/hooks';
import { Loader } from '../../loader/loader';
import { useState } from 'react';

type TCartTotalProps = {
    total: number;
}

const CartTotal = ({total}: TCartTotalProps): JSX.Element => {
    const cart = useSelector(state => state.constructorBurger.cart);
    const dispatch = useDispatch();
    const order = useSelector(state => state.constructorBurger.order);
    const isAuth = useSelector(state => state.user.isAuth);
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);

    const onOrderButtonClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        if(cart.top && cart.bottom ) {
            const orderIngredients = [
                cart.top._id,
                ...cart.fillings.map((ingredient) => ingredient._id),
                cart.bottom._id,
            ];
            const accessToken = localStorage.getItem("accessToken");
           
            if(isAuth && accessToken) {
                dispatch(createOrder(orderIngredients, accessToken ));
                setShowLoader(true);
            } else {
                navigate(`/${LOGIN}`);
            }
        } else {
            alert('ДОБАВЬТЕ БУЛКИ');
        }
    };

    const onOrderCloseClick = () => {
        dispatch(cleanCart());
        setShowLoader(false);
    }

    return (
        <div className={`${cartTotalStyles.wrapper} pt-6`}>
            <div className={`${cartTotalStyles.price} mr-10`}>
                <span className="text text_type_digits-medium mr-2">{total}</span>
                <CurrencyIcon type="primary" />
            </div>
            
            <Button data-test="create-order" htmlType="submit" type="primary" size="medium" onClick={onOrderButtonClick}>Оформить заказ </Button>
         
            {order !== null && 
                <Modal onCloseClick={onOrderCloseClick} modalTitle={''}>
                    <OrderModal orderNumber={order.id} />
                </Modal>
            }
            {showLoader && order === null && 
                <Modal onCloseClick={onOrderCloseClick} modalTitle={''}>
                    <Loader/>
                </Modal>
            }
        </div>
    )
}

export default CartTotal;