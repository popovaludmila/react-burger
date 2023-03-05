import Header from '../header/header';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from './app.module.css';

import data from '../utils/data.js';
import { useState } from 'react';
import OrderModal from '../modal/order-modal/order-modal';

const App = () => {
  const [cart, setCart] = useState({
    top: {
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
                    <BurgerIngredients items={data} cart={cart} onItemClick={onItemClick}/>
                    <BurgerConstructor cart={cart} />
                    <OrderModal />
                </div>
            </div>
        </main>
    </>
  );
}

  
export default App;