import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';

const ConstructorIngredient = ({item, type}) => {
    return (
    <li className={`${constructorIngredientStyles.ingredient} mb-4 mr-4 mt-4`}> 
        <ConstructorElement
            text={item.name}
            type={type}
            price={item.price}
            thumbnail={item.image}
            isLocked={true}
        />
    </li>
    )
}

export default ConstructorIngredient;