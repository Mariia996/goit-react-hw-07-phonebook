import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import contactsReducer from './phonebook/reducers/phonebookContacts-reducer';
import filterReducer from './phonebook/reducers/phonebookFilter-reducer';
import loadingReducer from './phonebook/reducers/phonebookLoading-reducer';

const appPhonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

const rootReducer = combineReducers({
    phonebook: appPhonebookReducer,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;