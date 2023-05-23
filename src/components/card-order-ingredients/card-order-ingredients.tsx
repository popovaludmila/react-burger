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

    const showMore = () => {
        if(orderIngredients.length - 6 === 0) {
            return false;
        }
        return true;
    }

    const cardIngredients = orderIngredients.map((item, index) => {
           if (index === 5) {
                return (
                    <OrderIngredient 
                        showMore={showMore()} 
                        key={index} 
                        img={item.image_mobile} 
                        name={item.name}
                        length={orderIngredients.length}
                        index={index} />
                )
            } else if (index < 5) {
                return (
                    <OrderIngredient 
                        showMore={false} 
                        key={index} 
                        img={item.image_mobile} 
                        name={item.name}
                        length={orderIngredients.length}
                        index={index} />
                )
            } else return null
                
            
        }
    )
    
    return (
        <div className={`${cardOrderIngredientsStyles.info} pt-6`}>
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