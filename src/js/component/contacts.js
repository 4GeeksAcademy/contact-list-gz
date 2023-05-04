import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contacts = () => {
  const { store, actions } = useContext(Context);
  const {allContact, setAllContact} = useState({})
  useEffect(() => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/gabrielazaro`)
      .then((response) => response.json())
      .then((data) => {
        setAllContact(data),
          console.log(data);
      })
      .catch((error) => {
        console.log("¡Oh no! Hubo un problema: \n", error);
      });
  }, []);
  return (
    <div className="container my-3">
      <div className="d-flex">
        <h1 className="text-danger justify-content-start">List Contact</h1>
      </div>
      <div className="row flex-wrap overflow-auto">
        {allContact.map(() => (
          <div key={index} className="col-3 container-character">
            <div className="card my-3 container-datos d-flex">
              <div className="card-body">
                <h5 className="card-title">
                hOLA
              </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};