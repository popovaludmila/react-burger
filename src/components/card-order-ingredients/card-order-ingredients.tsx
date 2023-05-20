import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientData } from '../../types/types';
import { OrderIngredient } from '../order-ingredient/order-ingredient';
import cardOrderIngredientsStyles from './card-order-ingredients.module.css';

type TCardOrderIngredientsProps = {
    orderIngredients: TIngredientData[];
}

export const CardOrderIngredients = ({orderIngredients}: TCardOrderIngredientsProps): JSX.Element => {
    let total = 0;

    orderIngredients.map((item) => total+= item.price);

    const cardIngredients = orderIngredients.map((item) => {
            return (
                
                <OrderIngredient img={item.image} name={item.name} />
            )
        }
    )
    
    return (
        <div className={cardOrderIngredientsStyles.info}>
                <ul className={cardOrderIngredientsStyles.ingredients}>
                        {cardIngredients}
                </ul>
                <div className={`${cardOrderIngredientsStyles.price} pl-6 text text_type_digits-default`}> 
                    <span className="pr-2">{total}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
    )
}