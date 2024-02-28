import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigets = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        onsole.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((error) => console.log(error));
  });

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigets("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white  rounded p-3 ">
        <form onSubmit={Update}>
          <h2>Update Users</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="Email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
