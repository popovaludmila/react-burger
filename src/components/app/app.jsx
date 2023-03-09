import Header from '../header/header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from './app.module.css';

import { getIngredientData } from '../utils/data.js';

import { useState, useEffect} from 'react';

const App = () => {

  const [ingredientData, setIngredientData] = useState([]);
  

  useEffect(() => {
    getIngredientData(
      (data) => {
        if (data["data"]) {
          setIngredientData([...ingredientData, ...data["data"]]);
        }
      },
      (error) => alert(error)
    )
  }, []);
  
  // useEffect(() => {
  //    const getIngreduentData = async () => {
  //       setState({...state, isLoading: true, hasError: false});
  //       fetch(urlData)
  //          .then(res => res.json())
  //          .then(ingredientData => setState({...state, ingredientData: data, isLoading: false}))
  //          .catch(e => {
  //             setState({ ...state, hasError: true, isLoading: false });
  //          });
  //    }
  //    getIngreduentData();
  
  // }, [state]);

 // const { data, isLoading, hasError } = state;

  const [cart, setCart] = useState({
    top: {
        "_id":"60666c42cc7b10027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v":0
    },
   fillings: [],
   bottom: {
      "_id":"60666c42cc7b410027a1a9b1",
      "name":"Краторная булка N-200i",
      "type":"bun",
      "proteins":80,
      "fat":24,
      "carbohydrates":53,
      "calories":420,
      "price":1255,
      "image":"https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v":0
  }
  })

  const onItemClick = (item) => {
      setCart({
        ...cart,
        fillings: [...cart.fillings, item]
      })
  }



  return (
    <>
      <Header />
      <main>
            <div className="container">
                <div className={appStyles.main}>
                    {/* {isLoading && 'Загрузка...'}
                    {hasError && 'Произошла ошибка'}
                    {!isLoading &&
                      !hasError &&  */}
                    <BurgerIngredients items={ingredientData} cart={cart} onItemClick={onItemClick}/>
                    <BurgerConstructor cart={cart} />

                </div>
            </div>
        </main>
    </>
  );
}

  
export default App;