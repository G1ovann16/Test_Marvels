import React from "react";
import { NavLink } from 'react-router-dom';
import "./header.scss";


const Header = () => {
    return (
        <header className="Header">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/hero" exact>Hero</NavLink>
            <NavLink to="/inf" exact>About us</NavLink>
        </header>
    );
  }
  
  export default Header;

