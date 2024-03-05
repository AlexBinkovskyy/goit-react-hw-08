import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  editContact,
  fetchContacts,
  removeContact,
} from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMsg: null,
    modalIsOpen: false,
    contactForModal: { id: null, name: null, number: null },
  },
  reducers: {
    toggleModal: (state, { payload }) => {
      state.modalIsOpen = payload;
    },
    setContactForModal: (state, { payload }) => {
      state.contactForModal = payload;
    },
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
      .addCase(editContact.fulfilled, (state, {payload}) => {
        state.error = false;
        const editedContactIndex = state.items.findIndex(({id}) => id===payload.id);
        state.items.splice(editedContactIndex, 1, payload)
        state.contactForModal = { id: null, name: null, number: null };
      })
      .addCase(editContact.rejected, state => {
        state.error = true;
        state.contactForModal = { id: null, name: null, number: null };
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

export const { toggleModal, setContactForModal } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
