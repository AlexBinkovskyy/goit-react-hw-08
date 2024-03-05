import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.name;

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectModalIsOpen = state => state.contacts.modalIsOpen;
export const selectContactForModal = state => state.contacts.contactForModal;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (storedContacts, filterValue) => {
    const contacts = storedContacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filterValue)
    );
    return contacts;
  }
);
