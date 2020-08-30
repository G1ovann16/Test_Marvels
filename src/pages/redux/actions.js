import axios from "axios";
import {  BASE_URL, CHARACTER_ROUTE } from "../../api-config";
import store from "./store";
// export const HERO = 'hero';

export const heroe = async () =>{
   await axios.get(BASE_URL + CHARACTER_ROUTE)
  .then(
    res=>{
        console.log(res.data.data.results[0],
            res.data.data.results[0].thumbnail,
            res.data.data.results[0].thumbnail.path
            )
            store.dispatch({ 
                type: 'HERO',
                payload: res.data.data.results[0]
            });
    }  
  )}
