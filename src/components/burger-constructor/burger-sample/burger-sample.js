import burgerSampletStyles from './burger-sample.module.css'

export const BurgerSample = ({text, margin}) => {
    return (
        <>
            <li className={`${burgerSampletStyles.ingredient} mr-4 ${margin}`}> 
                <span>{text}</span>
            </li>
        </>
    )

}