import { useEffect, useMemo } from "react";
import IngredientCard from '../ingredient-card/ingredient-card';
import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { switchTab } from "../../../services/actions";



const BurgerIngredientsBlock = ({title, ingredientsType}) => {
   const {ref, inView} = useInView({
      threshold: 0
   });
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(switchTab(ingredientsType, inView));
   }, [inView]);

   const ingredientsData = useSelector(state => state.ingredients)

   const ingredients = useMemo(
      () => ingredientsData
         .filter((item) => item.type === ingredientsType),
      [ingredientsData, ingredientsType]
   );
   
   const ingredientCarts = ingredients.map((item) => (
      <IngredientCard key={item._id} item={item}/>
   ));

   return (
      <div ref={ref}> 
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
