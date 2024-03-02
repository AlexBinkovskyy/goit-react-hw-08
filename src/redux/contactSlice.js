import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMsg: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
        state.errorMsg = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.error = false;
        if (state.items.length === 1) {
          state.error = true;
          state.errorMsg = 'There are no contacts to show yet';
        }
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.error = true;
        state.errorMsg = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = false;
        state.items.unshift(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = true;
        state.errorMsg = payload;
      }),
});

export const contactReducer = contactSlice.reducer;
