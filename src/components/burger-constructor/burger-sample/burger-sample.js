import burgerSampletStyles from './burger-sample.module.css'
import PropTypes from 'prop-types';

export const BurgerSample = ({text, margin, isHover}) => {
    const border = isHover ? "solid lightgreen" : "";

    return (
        <li className={`${burgerSampletStyles.ingredient} mr-4 ${margin}`} style={{border}}> 
            <span>{text}</span>
        </li>
    )
}

BurgerSample.propTypes = {
    text: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    isHover: PropTypes.bool
}