import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserType {
  email: string;
  first_name?: string;
}

interface InitialStateType {
  authorizationModalVisiblity: boolean;
  user: UserType | null;
  isAuthenticated: boolean;
}

const initialState: InitialStateType = {
  authorizationModalVisiblity: false,
  user: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

export const modalSlice = createSlice({
  name: "modal-slice",
  initialState,
  reducers: {
    setAuhorizationModalVisiblty(state) {
      state.authorizationModalVisiblity = !state.authorizationModalVisiblity;
    },
    setUserData(state, action: PayloadAction<UserType | null>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setAuhorizationModalVisiblty, setUserData, logout } =
  modalSlice.actions;

export default modalSlice.reducer;
