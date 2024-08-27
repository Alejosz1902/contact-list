import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

let NewContact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const { actions } = useContext(Context);

  const handleAddContact = () => {
    actions.addContact(newContact);
    setNewContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div>
      <div className="text-center">
        <h1>Add a new contact</h1>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={newContact.address}
            onChange={handleInputChange}
            placeholder="Enter address"
          />
        </div>
      </form>
      <button
        className="btn btn-primary mt-2 col-12"
        onClick={handleAddContact}
      >
        Save
      </button>
    </div>
  );
};

export default NewContact;
