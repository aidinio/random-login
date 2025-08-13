import { RootState } from "@/store/store";

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn
export const selectName = (state: RootState) => state.user.userData?.name.first