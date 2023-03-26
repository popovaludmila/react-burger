import burgerSampletStyles from './burger-sample.module.css'

export const BurgerSample = ({text, margin, isHover}) => {
    const border = isHover ? "solid lightgreen" : "";

    return (
        <li className={`${burgerSampletStyles.ingredient} mr-4 ${margin}`} style={{border}}> 
            <span>{text}</span>
        </li>
    )

}