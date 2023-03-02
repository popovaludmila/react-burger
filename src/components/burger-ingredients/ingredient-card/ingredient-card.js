import ingredientCardStyles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const IngredientCard = ({item}) => {

    return (
      <li className={`${ingredientCardStyles.item} mr-6 ml-4 mb-10`}
      >
        <Counter count={1} size="default" extraClass="m-1" />

        <img src={item.image} width="240" height="120" alt="" />
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

export default IngredientCard;