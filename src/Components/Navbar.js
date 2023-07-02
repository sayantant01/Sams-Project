import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Menus from './Menus';
//import AboutPage from './AboutPage';
//import ContactPage from './ContactPage';
import Reservation from './Reservation';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/Home">Restaurant Name</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Menus">Menu</Link>
              </li>
               {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li> */}
              
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Reservation">Reserve a Table</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Route exact path="/Home" component={Home} />
      <Route path="/Menus" component={Menus} />
      {/* <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} /> */}
      <Route path="/Reservation" component={Reservation} />
    </Router>
  );
};

export default Navbar;