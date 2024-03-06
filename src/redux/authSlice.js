import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import {
  logInUser,
  logOutUser,
  refreshUser,
  registerNewUser,
} from './operations';

const authorizationSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        toast.success('You are successfully registered. Wellcome!!!');
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        toast.success('You are successfully logged in');
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        toast.success('You are successfully logged out');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        toast.success('session successfully restored');
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        toast.error('Please, log-in')
      });
  },
});

export const authReducer = authorizationSlice.reducer;
