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

function getInitialState() {
  if (typeof localStorage !== "undefined") {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      return JSON.parse(savedUser) as TState;
    }
  }
  return {
    isLoggedIn: false,
    userData: null,
  } as TState;
}

const userSlice = createSlice({
  name: "user",
  // initialState: getInitialState(),
  initialState: {
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
    loadData(state) {
      const initialData = getInitialState();
      if (initialData.isLoggedIn) {
        state.isLoggedIn = initialData.isLoggedIn;
        state.userData = initialData.userData;
      }
      else {
        state.isLoggedIn = false;
        state.userData = null;
      }
    }
  },
});

export const { login, logout, loadData } = userSlice.actions;
export default userSlice.reducer;
