import { RootState } from "../services/reducers/burder-constructor";
import { AppDispatch } from "../types";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
import type {} from "redux-thunk/extend-redux";

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;