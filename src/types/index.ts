import { ThunkAction } from "redux-thunk";
import { RootState } from "../services/reducers";

import { TBurgerConstructorActions } from "./burgerConstructorActions";
import { TOrderFeedActions } from "./orderFeedActions";
import { TUserActions } from "./userActions";
import { TUserOrdersActions } from "./userOrdersActions";

export type AppActions =
| TBurgerConstructorActions
| TUserActions
| TOrderFeedActions
| TUserOrdersActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

export type AppDispatch<TReturnType = void> = (
    action: AppActions | AppThunk<TReturnType>
  ) => TReturnType;