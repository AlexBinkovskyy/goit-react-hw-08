import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (storedContacts, filterValue) => {
    const contacts = storedContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
    return contacts;
  }
);
