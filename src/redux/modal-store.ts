import {createSlice} from "@reduxjs/toolkit";

interface InitialStateType {
    authorizationModalVisiblity: boolean;
}

const initialState: InitialStateType = {
    authorizationModalVisiblity: false,
};
export const modalSlice = createSlice({
    name:"modal-slice",
    initialState,
    reducers: {
        setAuhorizationModalVisiblty(state) {
            state.authorizationModalVisiblity = !state.authorizationModalVisiblity;
        },
    },
});


export const {setAuhorizationModalVisiblty} = modalSlice.actions;
export default modalSlice.reducer;