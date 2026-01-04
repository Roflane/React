import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    currentUser: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.currentUser = action.payload;
            localStorage.setItem("auth", JSON.stringify(state.currentUser));
        },
        logout(state) {
            state.isAuth = false;
            state.currentUser = null;
            localStorage.removeItem("auth");
        },
        loadUser(state) {
            const user = JSON.parse(localStorage.getItem("auth"));
            if (user) {
                state.isAuth = true;
                state.currentUser = user;
            }
        }
    }
});

export const { login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
