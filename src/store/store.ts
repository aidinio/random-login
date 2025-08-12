import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/user";
import { localStorageMiddleware } from "./middlewares";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
