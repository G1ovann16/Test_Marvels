import React from 'react';
// import { Router, Route, BrowserRouter } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import './App.css';
import  Home  from "./pages/components/Home/home";
import  Header  from "./pages/header/header";
import  Footer  from "./pages/footer/footer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Comics from './pages/components/About/Comics';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/comic/:id" component={Comics} exact/>
          {/* <Home/> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
