export type TIngredientData = {
        _id: string;
        name: string;
        type: string;
        proteins: number;
        fat: number;
        carbohydrates: number;
        calories: number;
        price: number;
        image: string;
        image_mobile: string;
        image_large: string;
}

export type TIngredient = Pick<TIngredientData, '_id' | 'name' | 'price' | 'image'> & {
        key?: string;
}

    