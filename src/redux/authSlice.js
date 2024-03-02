import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser } from './operations';

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
    builder.addCase(registerNewUser.pending, (state, {payload}) => {
      console.log(state, payload);
    });
  },
});

export const authReducer = authorizationSlice.reducer;
