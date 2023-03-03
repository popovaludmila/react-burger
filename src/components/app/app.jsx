import Header from '../header/header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from './app.module.css';

import data from '../utils/data.js';
import ingredientPropTypes from '../utils/prop-types.js';

const App = () => {
  

  return (
    <>
      <Header />
      <main>
            <div className="container">
                <div className={appStyles.main}>
                    <BurgerIngredients items={data} />
                    <BurgerConstructor items={data}/>
                </div>
            </div>
        </main>
    </>
  );
}

  
export default App;