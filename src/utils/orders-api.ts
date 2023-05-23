import { TIngredientData, IOrderType } from "../types/types";

export const fillOrderIngredients = (orderIngredients: Array<string>, ingredientsData: TIngredientData[]) => {
    const elements: TIngredientData[] = [];

    orderIngredients.forEach((ingredientId: any) => {

        ingredientsData.forEach((ingredient: TIngredientData) => {
        if (ingredient._id === ingredientId) {
            elements.push(ingredient);
        }
        });
  });

  return elements;
}

export const getOrderStatus = (order: IOrderType) => {
    switch (order?.status ) {
        case "done":
          return  "Выполнен";
        case "pending":
           return "Готовится";
        case "created":
           return "Создан";
        default:
            return ''
    }
};

export const getStatusTextColor = (orderStatus: string) => {
    switch(orderStatus) {
        case "Выполнен":
            return {color: "#00CCCC"};
        case "Готовится":
            return {color: "#F2F2F3"};
        case "Создан":
            return {color: "#F2F2F3"};
        default:
            return {color: "#F2F2F3"};
    }
}