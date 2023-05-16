import { useEffect, useMemo } from "react";

import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';
import { useInView } from "react-intersection-observer";
import { switchTab } from "../../../services/actions";
import { useDispatch, useSelector } from "../../../hooks/hooks";
import IngredientCard from "../ingredient-card/ingredient-card";

type TBurgerIngredientsBlockProps = {
   title: string;
   ingredientsType: string;
}

const BurgerIngredientsBlock = ({title, ingredientsType}:TBurgerIngredientsBlockProps):JSX.Element => {
   
   const {ref, inView} = useInView({
      threshold: 0
   });
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(switchTab(ingredientsType, inView));
   }, [inView, dispatch, ingredientsType]);

   const ingredientsData = useSelector(state => state.constructorBurger.ingredients)

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

export default BurgerIngredientsBlock;
