import ingredientCardStyles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../../utils/prop-types.js';
import {  useSelector } from 'react-redux';
//import { showDetailIngredient } from '../../../services/actions';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

const IngredientCard = ({item}) => {
  const location = useLocation();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item
  });

  const {image, price, name, _id} = item;
  //const dispatch = useDispatch();

 // const onIngredientClick = () => dispatch(showDetailIngredient(item));

  const cart = useSelector((state) => state.constructorBurger.cart)

  let count = 0;
  cart.fillings.forEach(filling =>  {
    if (filling._id === item._id) {
      count++;
    }
  })
  if (cart.top !== null && cart.top._id === item._id) {
    count++;
  }
  if (cart.bottom !== null && cart.bottom._id === item._id) {
    count++;
  }

  return (
    <div>
      <Link to={ `/ingredients/${_id}`} state={{background: location}}
      ref={dragRef} className={`${ingredientCardStyles.item} mb-10`} >
        {count ? <Counter count={count} size="default" extraClass="m-1" /> : null}
        
        <img src={image} width="240" height="120" alt={name} />
        
        <div className={ingredientCardStyles.price}>
          <span className="text text_type_main-medium pt-1 pb-1 pr-2">
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${ingredientCardStyles.name} text text_type_main-default`}>
          {name}
        </p>
      </Link>
    </div>
  );
}

IngredientCard.propTypes = {
  item: ingredientPropTypes.isRequired
};


export default IngredientCard;