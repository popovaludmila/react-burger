import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../../utils/prop-types.js';

const ConstructorIngredient = ({item, type, typeBun}) => {
    const {name, price, image} = item;
    return (
    <li className={`${constructorIngredientStyles.ingredient} mb-4 mr-4 mt-4`}> 
        <ConstructorElement
            text={`${name} (${typeBun})`}
            type={type}
            price={price}
            thumbnail={image}
            isLocked={true}
        />
    </li>
    )
}

ConstructorIngredient.propTypes = {
    item: ingredientPropTypes.isRequired,
    type: PropTypes.string.isRequired,
    typeBun: PropTypes.string.isRequired
}

export default ConstructorIngredient;