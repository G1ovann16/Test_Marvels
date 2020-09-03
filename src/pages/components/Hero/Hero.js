import React, {useState, useEffect, useReducer, Fragment} from "react";
import { connect } from "react-redux";
import { heroe } from "../../redux/actions";
import { Link } from "react-router-dom";
const Hero = (props) => {


useEffect(() => {
    heroe();
    
}, []);


    return (
         <Fragment>
              {props.hero?.map(h=>(
            <div className="col-3 p.5">
              <Link to={`/comic/${h.id}`}>
              <h6 key={h.id} className="mt-8">{h.name}</h6>
              </Link>  

               <img className="mt-4" src={h.thumbnail?.path+'.'+h?.thumbnail?.extension} alt="" width="100%"/>
            </div>
              ))}
        
        </Fragment>
)}
  
 
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Hero);
