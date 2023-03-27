const checkResponse = (response) => {
   if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
}
 
export const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}
