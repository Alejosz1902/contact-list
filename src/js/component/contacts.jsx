import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let Contacts = () => {
  const { store, actions } = useContext(Context);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    actions.getContacts();
  }, []);

  const handleDelete = () => {
    if (contactToDelete) {
      actions.deleteContact(contactToDelete.id);
      setContactToDelete(null);
    }
  };

  const openDeleteModal = (contact) => {
    setContactToDelete(contact);
  };

  return (
    <div className="container-xl mt-4">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/demo">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
        store.contacts.map((contact) => (
          <div className="card mb-0" key={contact.id}>
            <div className="row g-0">
              <div className="col-md-3 justify-content-center my-auto">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  className="img-fluid rounded-circle py-2 px-4"
                  alt="Contact"
                  style={{ maxHeight: "150px", width: "auto" }}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body text-start">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text fs-5 text-muted">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {contact.address}
                  </p>
                  <p className="card-text fs-6 text-muted">
                    <i className="fa-solid fa-phone-flip"></i> {contact.phone}
                  </p>
                  <p className="card-text fs-6 text-muted">
                    <i className="fa-solid fa-envelope"></i> {contact.email}
                  </p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                <Link to={`/edit/${contact.id}`}>
                  <button className="btn btn-outline-primary btn-sm me-2">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                </Link>

                <button
                  className="btn btn-outline-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  onClick={() => openDeleteModal(contact)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No contacts found.</p>
      )}
      <div class="modal" id="deleteModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Are you sure?</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-start">
              <p>If you delete this thing the entire universe will go down!</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Oh no!
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleDelete}
                data-bs-dismiss="modal"
              >
                Yes baby!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
