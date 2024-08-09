import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const contactSlice =createSlice({
    name:'contacts',
    initialState:{ //state value which need to be updated
        contacts:[]
    },
    reducers:{
        //actions
        //first action
        addContact: (state, action) => {
            if (state.contacts.find((item) => item.id == action.payload.id)) {
                toast.info('contact already added')
            } else {
                state.contacts.push({ ...action.payload })
            }
        
        },

        editContact: (state, action) => {
            const { id, updatedData } = action.payload;
            const existingContact = state.contacts.find(contact => contact.id === id);
            if (existingContact) {
              existingContact.name = updatedData.name;
              existingContact.phone = updatedData.phone;
              existingContact.email = updatedData.email;
              toast.success('Contact Updated')
            }
          },

          deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
          }
        }
})

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;