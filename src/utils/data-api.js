import { BASE_URL } from "./data";

const checkResponse = (response) => {
   return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
}
 
export const request = (url, options) => {
  return fetch(url, options).then(checkResponse).then((data) => {
    if (!data.success) {
      throw new Error(`${data.message}`);
    }
    return data;
})
}

export const refreshToken = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    console.log(err.message);
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.Authorization = refreshData.accessToken;
      const res = await fetch(url, options); 
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};


