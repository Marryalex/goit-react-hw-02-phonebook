import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
  export default ContactList