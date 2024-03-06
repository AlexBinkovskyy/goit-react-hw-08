import { createSlice } from '@reduxjs/toolkit';

const filterContact = createSlice({
  name: 'filters',
  initialState: {
    value: '',
  },
  reducers: {
    contactFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { contactFilter } = filterContact.actions;
export const filterContactReducer = filterContact.reducer;
