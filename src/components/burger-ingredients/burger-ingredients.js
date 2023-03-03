import { useMemo } from "react";
import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'


const BurgerIngredients = ({items}) => {

    const buns = useMemo(
        () => items.filter((item) => item.type === 'bun'),
        [items]
    );

    const sauces = useMemo(
        () => items.filter((item) => item.type === 'sauce'),
        [items]
    );

    const mains = useMemo(
        () => items.filter((item) => item.type === 'main'),
        [items]
    );


    return (
        <section className={`${burgerIngredientsStyles.wrapper} mr-4`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu />
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" titleId="bun" items={buns} />

                <BurgerIngredientsBlock title="Соусы" titleId="sauce" items={sauces} />

                <BurgerIngredientsBlock title="Начинки" titleId="main" items={mains} />
            </div>
        </section>
    )
}

export default BurgerIngredients;