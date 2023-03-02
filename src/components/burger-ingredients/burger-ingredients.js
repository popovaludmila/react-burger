
import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'


const BurgerIngredients = ({items}) => {
    const buns = items.filter((item) => item.type === 'bun');
    const sauce = items.filter((item) => item.type === 'sauce');
    const main = items.filter((item) => item.type === 'main');


    return (
        <section className={`${burgerIngredientsStyles.wrapper} mr-4`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu />
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" items={buns} />

                <BurgerIngredientsBlock title="Соусы" items={sauce} />

                <BurgerIngredientsBlock title="Начинки" items={main} />
            </div>
        </section>
    )
}

export default BurgerIngredients;