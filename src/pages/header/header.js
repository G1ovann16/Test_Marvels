import React from "react";
// import { NavLink } from 'react-router-dom';
import "./header.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (

<header className="Header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img src='./logo.svg' alt="logo" width="30px">  Captain America </img> */}
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            
            
          </li>
          <li className="nav-item">
            <a className="nav-link"><NavLink to="/" exact>Home</NavLink></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><NavLink to="/comic" exact>Comics</NavLink></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Skills Hero
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Leadership</a>
              <a className="dropdown-item" href="#">Indomitable Will</a>
              <a className="dropdown-item" href="#">Master martial artist</a>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </header>
    );
  }
  
  export default Header;

