import IngredientCard from '../ingredient-card/ingredient-card';
import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';


const BurgerIngredientsBlock = ({title, items, increment}) => {
   const ingrediens = items.map((item) => (
      <IngredientCard key={item._id} item={item} increment={increment}/>
   ));

   return (
      <div>
         <h2 className="text text_type_main-medium pt-10 pb-6">
               {title}
         </h2>
         <ul className={burgerIngredientsBlockStyles.list}>
               {ingrediens}
         </ul>
      </div>  
   )
}

export default BurgerIngredientsBlock;
