import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';
import { TIngredient } from '../../../types/types';

type TConstructorIngredientProps = {
    item: TIngredient;
    type: "top" | "bottom" | undefined;
    typeBun: string;
}

const ConstructorIngredient = ({item, type, typeBun}:TConstructorIngredientProps):JSX.Element => {
    const {name, price, image} = item;
    return (
    <li data-test="bun" className={`${constructorIngredientStyles.ingredient} mb-4 mr-4 mt-4`}> 
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