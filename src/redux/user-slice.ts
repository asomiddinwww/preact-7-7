import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { AuthType } from "../@types/inedx";

interface InitialStateType {
  user: AuthType | null;
}

const getInitialUser = (): AuthType | null => {
  const userCookie = Cookies.get("user");
  if (!userCookie || userCookie === "undefined") {
    return null;
  }
  try {
    return JSON.parse(userCookie);
  } catch (error) {
    return null;
  }
};

const initialState: InitialStateType = {
  user: getInitialUser(),
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<AuthType | null>) {
      state.user = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
