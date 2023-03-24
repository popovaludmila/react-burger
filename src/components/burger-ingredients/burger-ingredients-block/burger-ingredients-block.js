import { useMemo } from "react";
import IngredientCard from '../ingredient-card/ingredient-card';
import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const BurgerIngredientsBlock = ({title, ingredientsType}) => {
   const ingredientsData = useSelector(state => state.ingredients)

   const ingredients = useMemo(
      () => ingredientsData
         .filter((item) => item.type === ingredientsType),
      [ingredientsData, ingredientsType]
   );
   
   const ingredientCarts = ingredients.map((item) => (
      <IngredientCard key={item.id} item={item}/>
   ));

   return (
      <div>
         <h2 id={ingredientsType} className="text text_type_main-medium pt-10 pb-6">
               {title}
         </h2>
         <ul className={`${burgerIngredientsBlockStyles.list} mr-4 ml-4`}>
               {ingredientCarts}
         </ul>
      </div>  
   )
}

BurgerIngredientsBlock.propTypes = {
   title: PropTypes.string.isRequired,
   ingredientsType:PropTypes.string.isRequired
};

export default BurgerIngredientsBlock;
