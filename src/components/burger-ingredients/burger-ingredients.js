import BurgerIngredientsBlock from "./burger-ingredients-block/burger-ingredients-block";
import BurgerMenu from "./burger-menu/burger-menu";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import { BUN, MAIN, SAUCE } from "../../utils/data";
import IngredientModal from "../modal/ingredient-modal/ingredient-modal";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
    const detailIngredient = useSelector(state => state.detailIngredient)

    return (
        <section className={`${burgerIngredientsStyles.wrapper}`}>
            <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
            
            <BurgerMenu /> 
            <div className={burgerIngredientsStyles.main}> 
                <BurgerIngredientsBlock title="Булки" ingredientsType={BUN}/>

                <BurgerIngredientsBlock title="Соусы" ingredientsType={SAUCE}/>

                <BurgerIngredientsBlock title="Начинки" ingredientsType={MAIN}/>
            </div>
            {detailIngredient !== null && 
                <Modal modalTitle={'Детали ингредиента'}>
                    <IngredientModal />
                </Modal>
            }
        </section>
    )
}

export default BurgerIngredients;