/* eslint-disable no-useless-escape */
// const checkResponse = (response) => {
//    if (response.ok) {
//       return response.json();
//     }
//     throw new Error(`${response.status} ${response.statusText}`);
// }
 
// export const request = (url, options) => {
//   return fetch(url, options).then(checkResponse)
// }

export const loginRequest = (url, options) => {
  return fetch(url, options);
}

export const request = (url, options) => {
  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
         return response.json();
      }
      if ([403, 404, 400].includes(response.status)) {
          return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
   })
   .then((data) => {
      if (!data.success) {
        throw new Error(`${data.message}`);
      }
      return data;
  })
}

export const setCookie = (name, value, props) => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
} 
