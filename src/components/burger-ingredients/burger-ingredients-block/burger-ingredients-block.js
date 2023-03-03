import IngredientCard from '../ingredient-card/ingredient-card';
import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';


const BurgerIngredientsBlock = ({title, titleId, items}) => {
   const ingrediens = items.map((item) => (
      <IngredientCard key={item._id} item={item} />
   ));

   return (
      <div>
         <h2 id={titleId} className="text text_type_main-medium pt-10 pb-6">
               {title}
         </h2>
         <ul className={burgerIngredientsBlockStyles.list}>
               {ingrediens}
         </ul>
      </div>  
   )
}

export default BurgerIngredientsBlock;
