import { nanoid } from 'nanoid';
import { createSlice} from "@reduxjs/toolkit";
import initalContacts from '../components/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initalContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
