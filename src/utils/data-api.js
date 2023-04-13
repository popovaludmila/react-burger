import { BASE_URL } from "./data";

const checkResponse = (response) => {
   if (response.ok) {
      return response.json();
    }
    if ([403, 404, 400].includes(response.status)) {
      return response.json();
  }
    throw new Error(`${response.status} ${response.statusText}`);
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
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); 
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};