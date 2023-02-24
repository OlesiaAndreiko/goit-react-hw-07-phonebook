// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlise';

export const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    filters: filtersReducer,
  }  
})

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'], // only contacts will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
  // reducer: persistedReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
// });

// export const persistor = persistStore(store);
