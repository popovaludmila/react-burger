import { IBaseResponse, ITokenResponse } from "../types/types";
import { BASE_URL } from "./data";

const checkResponse = <T extends IBaseResponse>(response: Response): Promise<T> => {
   return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
 
export const request = <T extends IBaseResponse>(url: string, options: RequestInit): Promise<T> => {
  return fetch(url, options).then(res => checkResponse<T>(res)).then((data) => {
    if (!data.success) {
      Promise.reject(`${data.message}`);
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

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      if (options.headers) {
        options.headers.Authorization = refreshData.accessToken;
      }
      const res = await fetch(url, options); 
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};


