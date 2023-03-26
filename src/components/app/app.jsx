import Header from '../header/header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from './app.module.css';

import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <Header />
      <main>
            <div className="container">
                <div className={appStyles.main}>
                  <DndProvider backend={HTML5Backend}>
                      <BurgerIngredients />
                      <BurgerConstructor /> 
                  </DndProvider>
                </div>
            </div>
        </main>
    </>
  );
}

  
export default App;