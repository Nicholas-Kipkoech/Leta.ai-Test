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
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
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
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },
  },
});

export const { loadContacts, addContact, deleteContact } =
  contactsReducer.actions;
export default contactsReducer.reducer;
