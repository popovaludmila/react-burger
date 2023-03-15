import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import PropTypes from 'prop-types';
import {cartPropTypes} from "../../utils/prop-types";
import { BUN, MAIN, SAUCE } from "../../utils/data";

const BurgerIngredients = ({cart, onItemClick}) => {
    const addedItems = new Map();

    addedItems[cart.top._id] = (addedItems[cart.top._id] ?? 0) + 1
    addedItems[cart.bottom._id] = (addedItems[cart.bottom._id] ?? 0) + 1

    cart.fillings.forEach((item)=>(addedItems[item._id] = (addedItems[item._id] ?? 0) + 1));

    return (
        <section className={`${burgerIngredientsStyles.wrapper}`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu /> 
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" ingredientsType={BUN} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Соусы" ingredientsType={SAUCE} addedItems={addedItems} onItemClick={onItemClick}/>

                <BurgerIngredientsBlock title="Начинки" ingredientsType={MAIN} addedItems={addedItems} onItemClick={onItemClick}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    cart: cartPropTypes.isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default BurgerIngredients;