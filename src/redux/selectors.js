import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.value;

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectModalIsOpen = state => state.contacts.modalIsOpen;
export const selectContactForModal = state => state.contacts.contactForModal;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (storedContacts, filterValue) => {
    const params = {
      keys: ['name', 'number'],
      shouldSort: true,
    };
    const fuse = new Fuse(storedContacts, params);
    const contacts = fuse.search(filterValue).map(contact => contact.item);
    return contacts;
  }
);