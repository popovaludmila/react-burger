import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';
import { TIngredientData } from '../../../types/types';

type TConstructorIngredientProps = {
    item: TIngredientData;
    type: "top" | "bottom" | undefined;
    typeBun: string;
}

const ConstructorIngredient = ({item, type, typeBun}:TConstructorIngredientProps):JSX.Element => {
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

export default ConstructorIngredient;