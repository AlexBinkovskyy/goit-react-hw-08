import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerNewUser } from './operations';

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
    builder.addCase(registerNewUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    }).addCase(loginUser.fulfilled, (state, {payload}) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authorizationSlice.reducer;
