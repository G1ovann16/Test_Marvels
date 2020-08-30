import React from 'react';
// import logo from './logo.svg';
// import { Router, Route, BrowserRouter } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import './App.css';
import  Home  from "./pages/components/Home/home";
import  Header  from "./pages/header/header";
import  Footer  from "./pages/footer/footer";

function App() {
  return (
    <div>
      <Header/>
          <Home/>
        <Footer/>
    </div>
  );
}

export default App;
