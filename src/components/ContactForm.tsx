import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//redux
import { RootState } from '../app/store';
import { addContact, updateContact } from '../features/contacts/contactsSlice';

//types
import type { ContactFormProps } from '../types';

const ContactForm: React.FC<ContactFormProps> = ({ contactId, onFormSubmit }) => {
    const contact = useSelector((state: RootState) =>
        state.contacts.contacts.find(contact => contact.id === contactId)
    );
    const [firstName, setFirstName] = useState(contact?.firstName || '');
    const [lastName, setLastName] = useState(contact?.lastName || '');
    const [status, setStatus] = useState(contact?.status || 'active');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (contact) {
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setStatus(contact.status);
        }
    }, [contact]);

    const handleSubmit = () => {
        const updatedContact = {
            id: contactId || new Date().toISOString(),
            firstName,
            lastName,
            status,
        };

        if (contactId) {
            dispatch(updateContact(updatedContact));
        } else {
            dispatch(addContact(updatedContact));
        }

        onFormSubmit();  // Close the form
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-8">
                {contactId ? 'Edit Contact' : 'Add Contact'}
            </h2>
            <label htmlFor='firstName' className="inline mb-4 font-medium">First Name:
                <input
                    id='firstName'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="inline w-full p-2 mb-6 border rounded"
                    required={true}
                />
            </label>
            <label htmlFor='lastName' className="inline mb-4 font-medium">Last Name:
                <input
                    id='lastName'
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="block w-full p-2 mb-6 border rounded"
                />
            </label>

            <div className="flex gap-4 mt-4">
                <p className="inline font-medium">Status:</p>
                <label htmlFor='active' className="flex items-center gap-2 cursor-pointer">
                    <input
                        id='active'
                        type="radio"
                        value="active"
                        checked={status === 'active'}
                        onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                        className='cursor-pointer'
                    />
                    <span className="text-gray-800">Active</span>
                </label>
                <label htmlFor='inactive' className="flex items-center gap-2 cursor-pointer">
                    <input
                        id='inactive'
                        type="radio"
                        value="inactive"
                        checked={status === 'inactive'}
                        onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                        className='cursor-pointer'
                    />
                    <span className="text-gray-800">Inactive</span>
                </label>
            </div>

            <div className='mt-8'>
                <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Save
                </button>
                <button onClick={onFormSubmit} className="ml-2 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
