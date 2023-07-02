import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      console.log(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token"); // Clear the token from local storage on logout
  };

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <div className="container mt-4">
        <Routes>
          {!isLoggedIn && (
            <Route path="/" element={<Register onLogin={handleLogin} />} />
          )}
          {!isLoggedIn && (
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          )}
          <Route path="/Home" element={<Home/>} />

         
        </Routes>
      </div>
    </Router>
  );
};

export default App;