import React, {useState, useEffect, useReducer, Fragment} from "react";
import { connect } from "react-redux";
import {  comic } from "../../redux/actions";
import { useParams } from "react-router-dom";
const Comics = (props) => {

 const {id}=useParams();

 useEffect(() => {
    comic(id);
    
}, []);


    return (
    <Fragment>
    {props.comic?.map(c=>(
                <div className="col-3 p.5">
                <h6  className="mt-8">
                     {c.title} 
                </h6>
                <img className="mt-4" src={c.thumbnail?.path+'.'+c?.thumbnail?.extension} alt="" width="100%"/>
                </div>
      ))}    
    </Fragment>    
)}
  
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Comics);

