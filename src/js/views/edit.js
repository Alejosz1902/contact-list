import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import EditContact from "../component/editContact.jsx";
import "../../styles/demo.css";

export const Edit = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-4">
      <EditContact />
      <Link to="/">
        <button className="btn btn-primary col-12 mt-2">Back home</button>
      </Link>
    </div>
  );
};
