import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63f75900e8a73b486af5dabf.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//     "contacts/addContact", 
//     async(contact, thunkAPI) => {
//         const { name, number } = contact;
//         try {
//             const responce = await axios.post("/contacts", { name, number });
//             return responce.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// )