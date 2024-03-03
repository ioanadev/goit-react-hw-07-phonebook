 import {createSlice} from '@reduxjs/toolkit'
 
//  import { nanoid } from 'nanoid';
 const contactsInitialState = {
    contacts:[
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter:'',
 }

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContacts:(state, action) =>{
          state.contacts.push(action.payload);
        },
        deleteContacts(state, action){
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
       
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {addContacts, deleteContacts, setFilter} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;