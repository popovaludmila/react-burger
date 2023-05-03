import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import { BUN, MAIN, SAUCE } from "../../utils/data";
import { useSelector } from "react-redux";


const BurgerIngredients = ():JSX.Element => {
    //@ts-ignore
    const tabs = useSelector(state => state.constructorBurger.tabs);
    //@ts-ignore
    const currentTab = tabs.find(tab => tab.isActive);

    const scrollTo = (tab:string) => {
        const activeTab = document.getElementById(tab)
        activeTab?.scrollIntoView({behavior:"smooth"});
    }

    return (
        <section className={`${burgerIngredientsStyles.wrapper}`} >
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu  onTabClick={scrollTo} currentTab={currentTab ? currentTab.tab : null} /> 

            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" ingredientsType={BUN}/>

                <BurgerIngredientsBlock title="Соусы" ingredientsType={SAUCE}/>

                <BurgerIngredientsBlock title="Начинки" ingredientsType={MAIN}/>
            </div>
        </section>
    )
}

export default BurgerIngredients;