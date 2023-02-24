import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlise';

export const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    filters: filtersReducer,
  }  
})
