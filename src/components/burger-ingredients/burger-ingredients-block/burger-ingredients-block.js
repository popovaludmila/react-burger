import IngredientCard from '../ingredient-card/ingredient-card';
import burgerIngredientsBlockStyles from './burger-ingredients-block.module.css';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types.js';

const BurgerIngredientsBlock = ({title, titleId, items, addedItems, onItemClick}) => {
   const ingrediens = items.map((item) => (
      <IngredientCard key={item._id} item={item} count={addedItems[item._id]} onClick={() => onItemClick(item)}/>
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

BurgerIngredientsBlock.propTypes = {
   title: PropTypes.string.isRequired,
   titleId: PropTypes.string.isRequired,
   items: PropTypes.arrayOf(ingredientPropTypes.isRequired)
};

export default BurgerIngredientsBlock;
