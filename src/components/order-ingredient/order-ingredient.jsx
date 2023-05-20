import orderIngredientStyles from './order-ingredient.module.css';

export const OrderIngredient = ({img, name}) => {

    return (
        <>
            <div className={orderIngredientStyles.image}>
                <img height="64" src={img} alt={name}></img>
            </div>
        </>
    )
}