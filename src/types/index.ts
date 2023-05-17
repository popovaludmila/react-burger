import { ThunkAction } from "redux-thunk";
import { RootState } from "../services/reducers";
import { TBurgerConstructorActions } from "./burgerConstructorActions";
import { TUserActions } from "./userActions";

export type AppActions =
| TBurgerConstructorActions
| TUserActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

export type AppDispatch<TReturnType = void> = (
    action: AppActions | AppThunk<TReturnType>
  ) => TReturnType;