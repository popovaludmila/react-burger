import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import BurgerConstructor from "../../components/burger-constructor/burger-constructor"
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients"
import homeStyles from './home.module.css';

export const HomePage = () => {
    
   return (
        <main>
            <div className="container">
                <div className={homeStyles.main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor /> 
                </DndProvider>
                </div>
            </div>
        </main>
   ) 
}