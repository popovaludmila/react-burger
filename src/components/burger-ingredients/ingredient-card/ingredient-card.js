import ingredientCardStyles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../../utils/prop-types.js';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredientToCart, showDetailIngredient } from '../../../services/actions';
import uuid from 'react-uuid';

const IngredientCard = ({item}) => {
  const {image, price, name} = item;
  const dispatch = useDispatch();

  const onIngredientClick = () => {
    dispatch(showDetailIngredient(item))
    dispatch(addIngredientToCart(item, uuid()))
  }

  const cart = useSelector((state) => state.cart)

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
      <li className={`${ingredientCardStyles.item} mb-10`} onClick={onIngredientClick}>
        {count ? <Counter count={count} size="default" extraClass="m-1" /> : null}
        
        <img src={image} width="240" height="120" alt={name} />
        
        <div className={ingredientCardStyles.price}>
          <span className="text text_type_main-medium pt-1 pb-1 pr-2">
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <a
          className={`${ingredientCardStyles.name} text text_type_main-default`}
          href="t"
        >
          {name}
        </a>
      </li>
    </div>
  );
}

IngredientCard.propTypes = {
  item: ingredientPropTypes.isRequired,
  count: PropTypes.number
};


export default IngredientCard;