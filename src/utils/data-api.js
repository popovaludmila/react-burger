import { URL, URL_SEND } from "./data.js";

const checkResponse = (response) => {
   if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
}

const getIngredientData = (onSuccess) => {
   return fetch(URL)
      .then(checkResponse)
      .then((data) => {
         onSuccess(data);
       })
       .catch((err) => {
         alert(err);
       });
}

const sendData = async(onSuccess, onError, body) => {
   fetch(URL_SEND,
     {
       method: 'POST',
       headers: {
        "Content-Type": "application/json",
      },
       body
     },
   ).then((response) => {
     if (response.ok) {
       return response.json();
     }
     onError();
   }).then((data) => {
      onSuccess(data);
   })
     .catch(() => {
       onError();
     });
 };

 export { getIngredientData, sendData};
 