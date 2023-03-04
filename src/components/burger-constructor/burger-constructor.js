import burgerConstructorStyles from "./burger-constructor.module.css";
import CartTotal from './cart-total/cart-total';
import ConstructorFilling from "./constructor-filling/constructor-filling";
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient.js';

const BurgerConstructor = ({cart}) => {
    const constructorIngredient = cart.fillings.map((item) => (
        <ConstructorFilling key={item._id} item={item} />
    ))

    let total = cart.top.price + cart.bottom.price;

    cart.fillings.forEach((item) => (total += item.price));

    return (
        <section className={`${burgerConstructorStyles.constructor} mb-26`}>
        <div className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <ul className={burgerConstructorStyles.list}>
                <ConstructorIngredient key={cart.top._id} item={cart.top} type={"top"}/>
                
                <li className={`${burgerConstructorStyles.filling} pr-2`}>
                    <ul>
                        {constructorIngredient}
                    </ul>
                </li>
                
                <ConstructorIngredient key={cart.bottom._id} item={cart.bottom} type={"bottom"}/>
            </ul>

            
        </div>
        <div>
            <CartTotal total={total} />
        </div>
        </section>
    )
}

export default BurgerConstructor;