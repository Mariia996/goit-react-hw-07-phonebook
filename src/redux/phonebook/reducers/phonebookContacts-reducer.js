import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'phonebook',
    initialState: [],
    reducers: {
        getContactSuccess: (_, { payload }) => {
            return payload;
        },
        addContactSuccess: (state, { payload }) => {
            const result = state.find(state => {
                return (state.name === payload.name || state.number === payload.number);
            });
            if (result) {
                alert(`${payload.name} is already in contacts`);
                return [...state];
            }

            return [...state, payload];
            },
        deleteContactsSuccess(state, { payload }) {
            const newContactsList = [...state];
            newContactsList.splice(payload, 1);
            return newContactsList;
        },
    }
});
const { actions, reducer } = contactsSlice;

export const { addContactSuccess, deleteContactsSuccess } = actions;

export default reducer;