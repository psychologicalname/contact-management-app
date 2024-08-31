import React, { useState } from 'react';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';

const ContactsPage: React.FC = () => {
    const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleEditContact = (id: string) => {
        setSelectedContactId(id);
        setShowForm(true);
    };

    const handleAddNewContact = () => {
        setSelectedContactId(null);
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    return (
        <div className="container mx-auto p-4">
            {showForm ? (
                <ContactForm contactId={selectedContactId} onFormSubmit={handleFormClose} />
            ) : (
                <ContactsList onEditContact={handleEditContact} onAddContact={handleAddNewContact} />
            )}
        </div>
    );
};

export default ContactsPage;
