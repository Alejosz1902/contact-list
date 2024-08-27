import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

let EditContact = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const [editContact, setEditContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const contact = store.contacts.find((c) => c.id === parseInt(id));
    if (contact) {
      setEditContact(contact);
    }
  }, [store.contacts, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditContact({
      ...editContact,
      [name]: value,
    });
  };

  const handleEditContact = () => {
    actions.updateContact(editContact.id, editContact);
  };

  return (
    <div>
      <div className="text-center">
        <h1>Edit Contact</h1>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={editContact.name}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={editContact.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={editContact.phone}
            onChange={handleInputChange}
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={editContact.address}
            onChange={handleInputChange}
            placeholder="Enter address"
          />
        </div>
      </form>
      <button
        className="btn btn-primary mt-2 col-12"
        onClick={handleEditContact}
      >
        Save
      </button>
    </div>
  );
};

export default EditContact;
