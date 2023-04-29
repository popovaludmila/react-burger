import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import cartTotalStyles from './cart-total.module.css';
import Modal from '../../modal/modal';
import OrderModal from '../../modal/order-modal/order-modal';
import { useDispatch, useSelector } from 'react-redux';
import {  cleanCart, createOrder } from '../../../services/actions';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/data';

type TCartTotalProps = {
    total: number;
}

const CartTotal = ({total}: TCartTotalProps): JSX.Element => {
    const cart = useSelector(state => state.constructorBurger.cart);
    const dispatch = useDispatch();
    const order = useSelector(state => state.constructorBurger.order);
    const isAuth = useSelector(state => state.user.isAuth);
    const navigate = useNavigate();

    const onOrderButtonClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        if(cart.top && cart.bottom ) {
            const orderIngredients = [
                cart.top._id,
                ...cart.fillings.map((ingredient) => ingredient._id),
                cart.bottom._id,
            ];
            if(isAuth) {
                dispatch(createOrder(orderIngredients));
            } else {
                navigate(`/${LOGIN}`);
            }
        } else {
            alert('ДОБАВЬТЕ БУЛКИ');
        }
    };

    const onOrderCloseClick = () => {
        dispatch(cleanCart());
    }

    return (
        <div className={`${cartTotalStyles.wrapper} pt-6`}>
            <div className={`${cartTotalStyles.price} mr-10`}>
                <span className="text text_type_digits-medium mr-2">{total}</span>
                <CurrencyIcon type="primary" />
            </div>
            
            <Button htmlType="submit" type="primary" size="medium" onClick={onOrderButtonClick}>Оформить заказ</Button>
            {order !== null &&
                <Modal onCloseClick={onOrderCloseClick} modalTitle={''}>
                    <OrderModal orderNumber={order.id} />
                </Modal>
             } 
        </div>
    )
}

export default CartTotal;