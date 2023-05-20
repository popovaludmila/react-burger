import { AppDispatch } from "../types";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
import type {} from "redux-thunk/extend-redux";
import { RootState } from "../services/reducers";

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;