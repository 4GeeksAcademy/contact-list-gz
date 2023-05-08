import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [getContacts, setGetContacts] = useState([])
	const [nombre, setNombre] = useState('')
	const [description, setDescription] = useState('')
	const [url, setUrl] = useState('')

const getAllContacts = () => {
	fetch("https://assets.breatheco.de/apis/fake/contact/agenda/gabrielazaro", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setGetContacts(data);
			})
			.catch((error) => console.log("error", error));
}
	useEffect(() => {
		getAllContacts()
	}, []);

const handleDelete = (contact) =>{
	fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			getAllContacts();
		})
		.catch((error) => console.log("error", error));
}

	
	return (
		<div className="contenedor d-flex">
			{getContacts.map((contact, index) => (
				<div key={index}>
					<div className="card m-2" style={{ width: "18rem" }}>

						<div className="card-body">
							<h5 className="card-title">{contact.full_name}</h5>
							<p className="card-text">
								<strong>Phone:</strong> {contact.phone}
							</p>
							<p className="card-text">
								<strong>Email:</strong> {contact.email}
							</p>
							<p className="card-text">
								<strong>Address:</strong> {contact.address}
							</p>
							<Link to={`/editContact/${contact.id}`}>
							<button href="#" className="btn btn-secondary me-2">
								Edit
							</button>
							</Link>
							<button href="#" className="btn btn-danger" onClick={() => handleDelete(contact)}>
								Delete
							</button>
						</div>
					</div>

				</div>
			))}
		</div>)
}
