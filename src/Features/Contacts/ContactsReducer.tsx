import { createSlice } from "@reduxjs/toolkit";

export interface Contact {
  id: string | null;
  name: string;
  phone: string;
  email: string;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  selectedContact: Contact | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  selectedContact: null,
  error: null,
};

//contact reducer method
const contactsReducer = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    //reducer action for loading contacts from api
    loadContacts: (state, { payload }) => {
      return { ...state, contacts: payload };
    },
    addContact: (state, { payload }) => {
      const newContact = payload;
      const updatedContacts = [...state.contacts, newContact];
      return { ...state, contacts: updatedContacts };
    },
    deleteContact: (state, { payload }) => {
      const filteredContacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );

      return { ...state, contacts: filteredContacts };
    },
    getContact: (state, { payload }) => {
      const contact = state.contacts.find((contact) => contact.id === payload);
      if (contact) {
        state.selectedContact = contact;
      }
    },
    editContact: (state, { payload }) => {
      const updatedContact = payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );
      const updatedContactsList = [
        ...state.contacts.slice(0, index),
        updatedContact,
        ...state.contacts.slice(index + 1),
      ];

      return {
        ...state,
        contacts: updatedContactsList,
      };
    },
  },
});

export const {
  loadContacts,
  addContact,
  deleteContact,
  editContact,
  getContact,
} = contactsReducer.actions;
export default contactsReducer.reducer;
