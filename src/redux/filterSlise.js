import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filtres',
  initialState: {
    search: filtersInitialState,
  },
  reducers: {
    searchContact: (state, action) => {
      state.search = action.payload},
  },
});

export const { searchContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
