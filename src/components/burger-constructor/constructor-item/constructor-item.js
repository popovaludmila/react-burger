import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorItemStyles from './constructor-item.module.css';

const ConstructorIngredient = () => {
    <li className={`${constructorItemStyles.ingredient} pr-4 mb-4`}>
        <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={20}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
    </li>
}

export default ConstructorIngredient;