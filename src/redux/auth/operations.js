import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = ``);

export const registerNewUser = createAsyncThunk(
    'auth/register',
    async (newUser, thunkAPI) => {
      try {
        const response = await axios.post('/users/signup', newUser);
        setAuthHeader(response.data.token);
        toast.success('You are successfully registered. Wellcome!!!');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logInUser = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
      try {
        const response = await axios.post('/users/login', user);
        setAuthHeader(response.data.token);
        toast.success('You are successfully logged in');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        await axios.post('/users/logout');
        clearAuthHeader();
        toast.success('You are successfully logged out');
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const persistedToken = thunkAPI.getState().auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      try {
        setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );