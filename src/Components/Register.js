import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import Login from "./Login";
// import { Route } from "react-router-dom";


// <Route path="/Login" component={Login} />
const Register = () => {
  const [user, setUser] = useState({ name: "", email: "",phone:"", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7240/api/Users/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Registration failed");
        }
        return res.json();
      })
      .then((data) => {
        window.alert("Registration successful!");
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Submit
        </button>
        <p className="mt-2">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;