import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';


const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  //const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with your API endpoint for user authentication
    fetch("https://localhost:7240/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log(data.token);
        // Save the token in local storage
        localStorage.setItem("token", data.token);
        window.alert("Login successful!");
        // Redirect to /HomePage
        //history.push("/HomePage");
        window.location.href = "http://localhost:3000/Home";
      })
      .catch((error) => {
        console.log(error);
        window.alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit 
        </button>
        <p className="mt-2">
          Don't have an account? <Link to="/">Register</Link>
        </p>
        
      </form>
    </div>
  );
};

export default Login;