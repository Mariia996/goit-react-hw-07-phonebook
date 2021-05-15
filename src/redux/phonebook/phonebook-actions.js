import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const fetchContacts = createAction('phonebook/fetchContacts');

const handleFilter = createAction('phonebook/handleFilter');

const addContact = createAction('phonebook/addContact', ({ name, number }) => ({
    payload: {
        id: shortid.generate(),
        name,
        number
    }
}));

const deleteContacts = createAction('phonebook/deleteContacts');

export default { handleFilter, addContact, deleteContacts, fetchContacts };