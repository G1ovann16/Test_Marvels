import React, {useState, useEffect, useReducer} from "react";
import { connect } from "react-redux";
import { heroe, comic, stories } from "../../redux/actions";
import Pagina from "../Details/pagination";
import Hero from "../Hero/Hero";
const Home = (props) => {

const [hero, setHero]=useState('')

    return (
    <div className="container-fluid">    
      <div className="bg-image">
        <div className="container">
          <div className="row">
            <div className="col-6 my-auto">
              <h1>{props.hero?.name}</h1>
              <p>{props.hero?.description}</p>
              <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
              <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
            </div>
            <div className="col-6">
              <img src="captain.png" alt="" width="100%"/>
            </div>
          </div>
        </div>
      </div>
  
      
      <div className="container mt-3">
        <div className="text-center">
          <h3 className="subtitle">Best Comics</h3>
          <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit dolore cupiditate vel ut quo alias.</p>
          <div className="row">
              <Hero/>
        
          </div>
        </div>
      </div>
      
</div>      
)}
  
 
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Home);
