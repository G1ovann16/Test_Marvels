import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NavLink } from 'react-router-dom';
import  Home  from "./pages/components/home";
import DetailsHero from "./pages/components/detailsHero";
import { Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/details" component={DetailsHero} exact/>
  </BrowserRouter>
  );
}

export default App;
