import ingredientCardStyles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropTypes} from '../../utils/prop-types.js';
import Modal from '../../modal/modal';
import IngredientModal from '../../modal/ingredient-modal/ingredient-modal';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const IngredientCard = ({item, count, onClick}) => {

  const {image, price, name} = item;
  const [showIngredientModal, setShowIngredientModal] = useState(false);

  const onIngredientClick = () => {
    onClick();
    setShowIngredientModal(true);
  };

  const onCloseClick = () => {
    setShowIngredientModal(false);
  }

  const onEscKeydown = (evt) => {
    if( evt.key === 'Escape') {
      onCloseClick()
    };
  } 

  useEffect(() => {
    document.addEventListener('keydown', onEscKeydown)
    return () =>
      document.removeEventListener('keydown', onEscKeydown)
    
  })

    return (
      <div>
        <li className={`${ingredientCardStyles.item} mb-10`} onClick={onIngredientClick}
        >
          {count ? <Counter count={count} size="default" extraClass="m-1" /> : null}

          <img src={image} width="240" height="120" alt="Картинка ингредиента" />
          
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
         {showIngredientModal && 
            <Modal>
              <IngredientModal item={item} onClose={onCloseClick}/>
            </Modal>
          }
      </div>
    );
}

IngredientCard.propTypes = {
  item: ingredientPropTypes.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired
};


export default IngredientCard;