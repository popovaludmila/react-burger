import { useMatch } from "react-router-dom";
import { IOrderType, TIngredientData } from "../types/types";
import { useSelector } from "./hooks";

export const useOrderData = (order: IOrderType) => {
    const ingredients = useSelector((state) => state.constructorBurger.ingredients);
  
    const createOrderList = () => {
        
      const elements: TIngredientData[] = [];
      order?.ingredients.forEach((ingredientId) => {
        ingredients.forEach((ingredient: TIngredientData) => {
          if (ingredient._id === ingredientId) {
            elements.push(ingredient);
          }
        });
      });
  
      return elements;
    };


    const orderIngredients = createOrderList();
  
    const getOrderStatus = () => {
      if (order?.status === "done") {
        return "Выполнен";
      } else {
        return "Готовится";
      }
    };

    const orderStatus = getOrderStatus();
  
    const orderPrice = orderIngredients.reduce((count, item) => {
      return count + item.price;
    }, 0);
  
    const currentDate = new Date().getTimezoneOffset() / 60;
    const time = "i-GMT" + (currentDate > 0 ? "-" + currentDate : "+" + -currentDate);
  
    const matchProfile = useMatch('/profile/orders/');
    const feedMatch = useMatch('/feed');
  
    return { orderIngredients, orderPrice, orderStatus, time, feedMatch, matchProfile };
  };