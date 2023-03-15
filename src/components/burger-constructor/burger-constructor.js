import burgerConstructorStyles from "./burger-constructor.module.css";
import CartTotal from './cart-total/cart-total';
import ConstructorFilling from "./constructor-filling/constructor-filling";
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient.js';
import { cartPropTypes } from "../../utils/prop-types";
import uuid from 'react-uuid';

const BurgerConstructor = ({cart}) => {
    const constructorIngredient = cart.fillings.map((item) => (
        <ConstructorFilling key={uuid()} item={item} />
    ));

    let total = (cart.top.price ?? 0) + (cart.bottom.price ?? 0);

    cart.fillings.forEach((item) => (total += item.price));

    return (
        <section className={`${burgerConstructorStyles.constructor} mb-26`}>
        <div className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <ul className={burgerConstructorStyles.list}>
                {cart.top.name && <ConstructorIngredient key={uuid()} item={cart.top} type={"top"}/>}
                
                <li className={`${burgerConstructorStyles.item} pr-2`}>
                    <ul className={`${burgerConstructorStyles.filling}`}>
                        {constructorIngredient}
                    </ul>
                </li>
                
                {cart.bottom.name && <ConstructorIngredient key={uuid()} item={cart.bottom} type={"bottom"}/>}
            </ul>

            
        </div>
        <div className="pr-4">
            <CartTotal total={total} />
        </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    cart: cartPropTypes.isRequired
}

export default BurgerConstructor;