import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/types/api";

type TState =
  | {
      isLoggedIn: false;
      userData: null;
    }
  | {
      isLoggedIn: true;
      userData: IUser;
    };

const userSlice = createSlice({
  name: "user",
  initialState: localStorage?.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : {
    isLoggedIn: false,
    userData: null,
  } as TState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
