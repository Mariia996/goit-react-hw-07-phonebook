import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import { getFilter } from '../../../../redux/phonebook/phonebook-selectors';
import {handleFilter} from '../../../../redux/phonebook/reducers/phonebookFilter-reducer';
import { fields } from '../FormAddContacts/fields';

import styles from './ContactsFilter.module.css';

const ContactsFilter = ({value, handleChange}) => {
    const nameFilterInputId = shortid();
        return (
            <div className={styles.filterContainer}>
                <label htmlFor={nameFilterInputId} className={styles.nameInput}>Find contacts by name</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    type={fields.nameValue.type}
                    value={value}
                    name="name"
                    id={nameFilterInputId}
                    pattern={fields.nameValue.pattern}
                    title={fields.nameValue.title}
                    required />
                </div>
           );

}

const mapStateToProps = state => ({
    value: getFilter(state)
})

const mapDispatchToProps = dispatch => ({
    handleChange: (e) => dispatch(handleFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);