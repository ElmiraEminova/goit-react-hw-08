import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isloading: false,
        isError: false
    },
    extraReducers: (builder) =>
        builder
            .addCase(register.pending, (state) => {
                state.isloading = true;
                state.isError = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isloading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state) => {
                state.isError = true;
                state.isloading = false;
            })
            .addCase(login.pending, (state) => {
                state.isloading = true;
                state.isError = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isloading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isError = false;
            })
            .addCase(login.rejected, (state) => {
                state.isError = true;
                state.isloading = false;
            })
            .addCase(logOut.pending, (state) => {
                state.isloading = true;
                state.isError = false;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isloading = false;
                state.user = {
                    name: null,
                    email: null,
                },
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
                state.isloading = false;
                state.isError = false;
    
            })
            .addCase(logOut.rejected, (state) => {
                state.isloading = false;
                state.isError = true;
                state.isloading = false;
                state.user = {
                    name: null,
                    email: null,
                },
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
              
    })
});

export default authSlice.reducer;