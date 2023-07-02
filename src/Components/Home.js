import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';



const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulating login logic
  const login = (username, password) => {
    // Replace with your actual login logic
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Navbar />
          <div className="container">
            <h1>Welcome to the Restaurant Management System!</h1>
            <p>Content of the home page goes here...</p>
         </div>
          {/* Rest of your home page content */}
        </div>
      ) : (
        <h1>Error: Please login first!</h1>
      )}
    </div>
  );
};

   

export default Home;