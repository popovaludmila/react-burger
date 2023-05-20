import { TIngredientData } from "../types/types";

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