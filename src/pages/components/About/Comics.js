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
    <Fragment >
     <div className="row">
        {props.comic?.map(c=>(
            <div className="text-center col-3 col-sm-3 col-md-4 col-lg-4 col-xl-6 mb-6 p.5">
                <h6  className="mt-8">
                  {c.title} 
                </h6>
                <img className=" p.5" src={c.thumbnail?.path+'.'+c?.thumbnail?.extension} alt="" width="100%"/>
            </div>
            ))}    
     </div>
    </Fragment>    
)}
  
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Comics);

