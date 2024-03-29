import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.value;

export const selectContactForModal = state => state.contacts.contactForModal;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (storedContacts, filterValue) => {
    if (!filterValue) return storedContacts;
    const params = {
      keys: ['name', 'number'],
      shouldSort: true,
      threshold: 0.2,
    };
    const fuse = new Fuse(storedContacts, params);
    const contacts = fuse.search(filterValue).map(contact => contact.item);
    return contacts;
  }
);