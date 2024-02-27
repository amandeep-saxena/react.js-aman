import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigets = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigets('/');  
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 ">
        <form onSubmit={Submit}>
          <h2>Add user</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="Email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />

            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}   

export default CreateUser;
