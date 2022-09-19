import React from "react";


const ContactListItem = ({
    contactName,
    contactNumber,
    onClickDeleteContact,
  }) => {
    return (
      <li >
        <p>{contactName}</p>
        <p>{contactNumber}</p>
        <button type="button" onClick={onClickDeleteContact}>
          Delete
        </button>
      </li>
    );
  };
  export default ContactListItem