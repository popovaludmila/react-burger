import { useMemo } from "react";
import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from 'prop-types';
import {ingredientPropTypes, cartPropTypes} from "../utils/prop-types";
import { BUN, MAIN, SAUCE } from "../utils/data";

const BurgerIngredients = ({items, cart, onItemClick}) => {
    const addedItems = new Map();

    addedItems[cart.top._id] = (addedItems[cart.top._id] ?? 0) + 1
    addedItems[cart.bottom._id] = (addedItems[cart.bottom._id] ?? 0) + 1

    cart.fillings.forEach((item)=>(addedItems[item._id] = (addedItems[item._id] ?? 0) + 1));

    const buns = useMemo(
        () => items.filter((item) => item.type === BUN),
        [items]
    );

    const sauces = useMemo(
        () => items.filter((item) => item.type === SAUCE),
        [items]
    );

    const mains = useMemo(
        () => items.filter((item) => item.type === MAIN),
        [items]
    );


    return (
        <section className={`${burgerIngredientsStyles.wrapper}`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu />
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" titleId={BUN} items={buns} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Соусы" titleId={SAUCE} items={sauces} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Начинки" titleId={MAIN} items={mains} addedItems={addedItems} onItemClick={onItemClick}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
    cart: cartPropTypes.isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default BurgerIngredients;