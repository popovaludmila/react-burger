import ingredientCardStyles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropTypes from '../../utils/prop-types.js';

const IngredientCard = ({item, count, onClick}) => {

    return (
      <li className={`${ingredientCardStyles.item} mr-4 ml-4 mb-10`} onClick={onClick}
      >
        {count ? <Counter count={count} size="default" extraClass="m-1" /> : null}

        <img src={item.image} width="240" height="120" alt="Картинка ингредиента" />
        <div className={ingredientCardStyles.price}>
          <span className="text text_type_main-medium pt-1 pb-1 pr-2">
            {item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <a
          className={`${ingredientCardStyles.name} text text_type_main-default`}
          href="t"
        >
          {item.name}
        </a>
      </li>
    );
}

IngredientCard.propTypes = {
  item: ingredientPropTypes.isRequired
};


export default IngredientCard;