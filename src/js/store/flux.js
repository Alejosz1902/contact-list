const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      createAgenda: () => {
        fetch("https://playground.4geeks.com/contact/agendas/alejosz1902", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            getActions().getContacts();
          })
          .catch((error) => console.log(error));
      },
      getContacts: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/alejosz1902/contacts",
          {
            method: "GET",
          }
        )
          .then((response) => {
            if (response.status === 404) {
              getActions().createAgenda();
            }
            return response.json();
          })
          .then((data) => {
            if (data && data.contacts && Array.isArray(data.contacts)) {
              setStore({ contacts: data.contacts });
              console.log("Fetched contacts:", data.contacts);
            } else {
              console.error("Unexpected data format:", data);
              setStore({ contacts: [] });
            }
          })
          .catch((error) => console.log(error));
      },
      addContact: (newContact) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/alejosz1902/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newContact),
          }
        )
          .then((response) => response.json())
          .then(() => {
            getActions().getContacts();
          })
          .catch((error) => console.log(error));
      },
      updateContact: (id, editContact) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/alejosz1902/contacts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editContact),
          }
        )
          .then((response) => response.json())
          .then(() => {
            getActions().getContacts();
          })
          .catch((error) => console.log(error));
      },
      deleteContact: (id) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/alejosz1902/contacts/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            if (response.ok) {
              getActions().getContacts();
            }
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
