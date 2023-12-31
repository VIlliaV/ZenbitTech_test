import { createSlice } from '@reduxjs/toolkit';
import { login, signUp, logOut, refreshUser } from './authOperations';

const authInitialState = {
  user: {
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loginError: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loginError = '';
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, { payload = { message: 'server no connect' } }) => {
        state.loginError = payload.message;
      })
      .addCase(signUp.pending, state => {
        state.loginError = '';
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, { payload = { message: 'server no connect' } }) => {
        state.loginError = payload.message;
      })
      .addCase(logOut.fulfilled, state => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.loginError = '';
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
