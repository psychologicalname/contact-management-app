import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//redux
import { RootState } from '../app/store';
import { deleteContact } from '../features/contacts/contactsSlice';

//icons
import { FiPlus } from 'react-icons/fi';

//types
import type { ContactsListProps } from '../types';

const ContactsList: React.FC<ContactsListProps> = ({ onEditContact, onAddContact }) => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteContact(id));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Contacts</h1>
                <button
                    onClick={onAddContact}
                    className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded flex items-center gap-1"
                >
                    <FiPlus />
                    <span className="">New Contact</span>
                </button>
            </div>

            <ul>
                {contacts.length > 0 ? contacts.map(contact => (
                    <div key={contact.id} className="mb-4 p-4 border rounded shadow flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">
                                {contact.firstName} {contact.lastName}
                            </h2>
                            <div className='flex items-center gap-2 mb-2'>
                                <div className={`w-3 h-3 rounded-full ${contact.status === 'active' ? 'bg-green-600' : 'bg-red-600'}`} />
                                <p className={`${contact.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                                    {contact.status}
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => onEditContact(contact.id)}
                                className="text-blue-500 hover:underline mr-3"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(contact.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
                    :
                    <p className="text-gray-400">No Contacts Found!</p>
                }
            </ul>
        </div>
    );
};

export default ContactsList;
