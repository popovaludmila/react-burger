import orderIngredientStyles from './order-ingredient.module.css';

type TOrderIngredientProps ={
    img: string;
    name: string;
    showMore: boolean;
    length: number;
    index: number;
}
export const OrderIngredient = ({img, name, showMore, length, index}: TOrderIngredientProps): JSX.Element => {

    return (
        <>
            <li className={orderIngredientStyles.item} style={{ zIndex: 20 - index }}>
                <img className={orderIngredientStyles.image} src={img} alt={name} />
                {showMore && (
                    <p className={'text text_type_digits-default ' + orderIngredientStyles.text}>{`+${length - 6}`}</p>
                )}
            </li>
        </>
    )
}