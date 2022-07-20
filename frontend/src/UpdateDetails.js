import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
const UpdateDetails = (props) => {
  const [user_id,setUserid] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const url = `api/getOne/${id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        setUserid(json._id);
        setUsername(json.user_name);
        setEmail(json.user_email);
        setGender(json.user_gender);
        setStatus(json.user_status);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [id]);
  const updateUser = async () => {
    const id = user_id;

    const url = `api/update/${id}/`;
    console.log(username)
    fetch(url, {
      method: "PUT",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: username,
        user_email: email,
        user_gender: gender,
        user_status: status,
      }),
    })
    .then(response => {   
      if (response.ok) {
          alert("updated user")
        } else {
           throw new Error('Something went wrong ...');
        }
   })
  };

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" href={`/`}>
            Back
          </Button>
          <Button variant="primary" onClick={(id)=>updateUser(id)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default UpdateDetails;
