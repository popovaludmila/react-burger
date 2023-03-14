import { URL } from "./data.js";

const checkResponse = (response) => {
   if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
}

const getIngredientData = (onSuccess, onError) => {
   return fetch(URL)
      .then(checkResponse)
      .then((data) => {
         onSuccess(data);
       })
       .catch((err) => {
         onError(err);
       });
}

 export { getIngredientData};
 