import burgerConstructorStyles from "./burger-constructor.module.css";
import CartTotal from './cart-total/cart-total';
import ConstructorFilling from "./constructor-filling/constructor-filling";
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from "react-redux";
import { BurgerSample } from "./burger-sample/burger-sample";
import { useDrop } from "react-dnd";
import { addIngredientToCart } from "../../services/actions";
import { BUN } from "../../utils/data";
import { TConstructorIngredient } from "../../types/types";

type TConstructorCollectedTypes = {
    isHover: boolean;
    monitorItem: TConstructorIngredient & {type: string};
}

const BurgerConstructor = ():JSX.Element => {
    const dispatch = useDispatch()
    
    const [{isHover, monitorItem}, dropRef] = useDrop <TConstructorIngredient, unknown, TConstructorCollectedTypes>({
        accept: "ingredient",
        drop(item) {
            dispatch(addIngredientToCart(item, uuid()));
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
            monitorItem: monitor.getItem(),
        })     
    })

    const isBun = monitorItem && monitorItem.type === BUN;
    // @ts-ignore
    const cart = useSelector(state => state.constructorBurger.cart);
   // @ts-ignore
    const constructorIngredient = cart.fillings.map((item) => (
        <ConstructorFilling key={item.key} item={item} />
    ));

    const hasIngredients = constructorIngredient.length > 0;

    let total = 0;

    if (cart.top !== null) {
        total += cart.top.price
    }

    if (cart.bottom !== null) {
        total += cart.bottom.price
    }
// @ts-ignore
    cart.fillings.forEach((item) => (total += item.price));
    

    return (
        <section className={`${burgerConstructorStyles.constructor} mb-26`}>
        <div className={`${burgerConstructorStyles.wrapper} mt-25`}>
            <ul className={burgerConstructorStyles.list} ref={dropRef} >
                {(cart.top && <ConstructorIngredient item={cart.top} type={"top"} typeBun={"вверx"} />) || 
                    <BurgerSample text={"Добавить булки"} margin={"mb-4"}  isHover={isBun && isHover}/>} 
               
                
                <li className={`${burgerConstructorStyles.item} pr-2`}>
                    <ul className={`${burgerConstructorStyles.fillings}`}>
                        {hasIngredients ? constructorIngredient : <BurgerSample text={"Добавить начинку"} margin="" isHover={!isBun && isHover}/>} 
                    </ul>
                </li>
                
                {(cart.bottom && <ConstructorIngredient item={cart.bottom} type={"bottom"} typeBun={"низ"}/>) ||
                    <BurgerSample text={"Добавить булки"} margin={"mt-4"} isHover={isBun && isHover} />}
            </ul>

            
        </div>
        <div className="pr-4">
            <CartTotal total={total} />
        </div>
        </section>
    )
}

export default BurgerConstructor;