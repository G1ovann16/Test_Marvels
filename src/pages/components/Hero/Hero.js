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
                <div className="text-center col-3 col-sm-3 col-md-4 col-lg-4 col-xl-6 mb-6 p.5">
                      <img className="mt-4" src={h.thumbnail?.path+'.'+h?.thumbnail?.extension} alt="" width="100%"/>
                   <Link to={`/comic/${h.id}`}>
                      <h6 key={h.id} className="mt-8">{h.name}</h6>
                   </Link>  
                </div>
              ))}
        
        </Fragment>
)}
  
 
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Hero);
