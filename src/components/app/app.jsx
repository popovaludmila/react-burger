import Header from '../header/header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from './app.module.css';

import { getIngredientData } from '../../utils/data-api.js';

import { useState, useEffect} from 'react';
import { BUN } from '../../utils/data';
import { IngredientsDataContext } from '../../utils/context.js';

const App = () => {

  const [ingredientsData, setIngredientsData] = useState([]);
  

  useEffect(() => {
    getIngredientData(
      (data) => {
        if (data["data"]) {
          setIngredientsData([...ingredientsData, ...data["data"]]);
        }
      },
      (error) => alert(error)
    )
  }, []);
  
  const [cart, setCart] = useState({
    top: {},
    fillings: [],
    bottom: {}
  })

  const onItemClick = (item) => {
      if(item.type === BUN) {
        setCart({
          ...cart,
          top: item,
          bottom: item
        })
      } else {
        setCart({
          ...cart, 
          fillings: [...cart.fillings, item],
        })
      }

     
  }



  return (
    <>
      <Header />
      <main>
            <div className="container">
                <div className={appStyles.main}>
                    <IngredientsDataContext.Provider value={[ingredientsData]}>
                      <BurgerIngredients cart={cart} onItemClick={onItemClick}/>
                      <BurgerConstructor cart={cart} />
                    </IngredientsDataContext.Provider>
                </div>
            </div>
        </main>
    </>
  );
}

  
export default App;