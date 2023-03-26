import burgerSampletStyles from './burger-sample.module.css'

export const BurgerSample = ({text}) => {
    return (
        <>
            <li className={`${burgerSampletStyles.ingredient} mb-4 mr-4 mt-4`}> 
                <span>{text}</span>
            </li>
        </>
    )

}