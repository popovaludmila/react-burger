import { useMemo } from "react";
import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from 'prop-types';
import ingredientPropTypes from '../utils/prop-types.js';

const BurgerIngredients = ({items, cart, onItemClick}) => {
    let addedItems = {};

    addedItems[cart.top._id] = (addedItems[cart.top._id] ?? 0) + 1
    addedItems[cart.bottom._id] = (addedItems[cart.bottom._id] ?? 0) + 1

    cart.fillings.forEach((item)=>(addedItems[item._id] = (addedItems[item._id] ?? 0) + 1));

    const buns = useMemo(
        () => items.filter((item) => item.type === 'bun'),
        [items]
    );

    const sauces = useMemo(
        () => items.filter((item) => item.type === 'sauce'),
        [items]
    );

    const mains = useMemo(
        () => items.filter((item) => item.type === 'main'),
        [items]
    );


    return (
        <section className={`${burgerIngredientsStyles.wrapper}`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu />
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" titleId="bun" items={buns} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Соусы" titleId="sauce" items={sauces} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Начинки" titleId="main" items={mains} addedItems={addedItems} onItemClick={onItemClick}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(ingredientPropTypes.isRequired)
};

export default BurgerIngredients;