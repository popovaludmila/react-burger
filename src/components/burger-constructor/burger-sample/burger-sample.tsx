import burgerSampletStyles from './burger-sample.module.css'

type TBurgerSampleProps = {
    text: string;
    margin: string;
    isHover: boolean;
}

export const BurgerSample = ({text, margin, isHover}:TBurgerSampleProps):JSX.Element=> {
    const border = isHover ? "solid lightgreen" : "";

    return (
        <li data-test="burger_constructor_area" className={`${burgerSampletStyles.ingredient} mr-4 ${margin}`} style={{border}}> 
            <span>{text}</span>
        </li>
    )
}