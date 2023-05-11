import { IBaseResponse, ITokenResponse } from "../types/types";
import { BASE_URL } from "./data";

const checkResponse = <T extends IBaseResponse>(response: Response): Promise<T> => {
   return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
 
export const request = <T extends IBaseResponse>(url: string, options?: RequestInit): Promise<T> => {
  return fetch(url, options).then(res => checkResponse<T>(res)).then((data) => {
    if (!data.success) {
      Promise.reject(data);
    }
    return data;
  })
}

const refreshToken = (): Promise<ITokenResponse> => {
  return request<ITokenResponse>(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    })
  });
}

export const fetchWithRefresh = async <T extends IBaseResponse> (url: string, options: RequestInit) => {
  try {
    return await request<T>(url, options);
  } catch (err) {
    if ((err as {message: string}).message !== "jwt expired") {
      return Promise.reject(err);
    }

    const refreshData = await refreshToken();
    localStorage.setItem("refreshToken", refreshData.refreshToken);
    localStorage.setItem("accessToken", refreshData.accessToken);
      if (options.headers) {
        (options.headers as {[key: string]: string}).Authorization = refreshData.accessToken;
      }
      
    return await request<T>(url, options);
   
  }
};


