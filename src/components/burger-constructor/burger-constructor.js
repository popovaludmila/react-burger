import burgerConstructorStyles from "./burger-constructor.module.css";
import CartTotal from './cart-total/cart-total';
import ConstructorFilling from "./constructor-filling/constructor-filling";
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient.js';
import uuid from 'react-uuid';
import { useSelector } from "react-redux";
import { BurgerSample } from "./burger-sample/burger-sample";

const BurgerConstructor = () => {
    const cart = useSelector(state => state.cart);
   
    const constructorIngredient = cart.fillings.map((item) => (
        <ConstructorFilling key={uuid()} item={item} />
    ));

    const hasIngredients = constructorIngredient.length > 0;

    let total = 0;

    if (cart.top !== null) {
        total += cart.top.price
    }

    if (cart.bottom !== null) {
        total += cart.bottom.price
    }

    cart.fillings.forEach((item) => (total += item.price));

    return (
        <section className={`${burgerConstructorStyles.constructor} mb-26`}>
        <div className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <ul className={burgerConstructorStyles.list}>
                {(cart.top && <ConstructorIngredient key={uuid()} item={cart.top} type={"top"}/>) || 
                    <BurgerSample text={"Добавить булки"} margin={"mb-4"}/>} 
               
                
                <li className={`${burgerConstructorStyles.item} pr-2`} key={uuid}>
                    <ul className={`${burgerConstructorStyles.fillings}`}>
                        {hasIngredients ? constructorIngredient : <BurgerSample text={"Добавить начинкуы"} margin=""/>} 
                    </ul>
                </li>
                
                {(cart.bottom && <ConstructorIngredient key={uuid()} item={cart.bottom} type={"bottom"}/>) ||
                    <BurgerSample text={"Добавить булки"} margin={"mt-4"}/>}
            </ul>

            
        </div>
        <div className="pr-4">
            <CartTotal total={total} cart={cart} />
        </div>
        </section>
    )
}

export default BurgerConstructor;