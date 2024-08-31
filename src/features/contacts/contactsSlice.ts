import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//types
import type { Contact, ContactsState } from '../../types';

const initialState: ContactsState = {
    contacts: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        updateContact: (state, action: PayloadAction<Contact>) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
            }
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
