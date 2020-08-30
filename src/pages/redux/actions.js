import axios from "axios";
import {  BASE_URL, CHARACTER_ROUTE, STORIES_ROUTE, COMIC_ROUTE} from "../../api-config";
import store from "./store";
// export const HERO = 'hero';

export const heroe = async () =>{
   await axios.get(BASE_URL + CHARACTER_ROUTE)
  .then(
    res=>{
        console.log(res.data.data.results[0]
            )
            store.dispatch({ 
                type: 'HERO',
                payload: res.data.data.results[0]
            });
    }  
  )}

  export const comic = async () =>{
    await axios.get(BASE_URL + COMIC_ROUTE)
   .then(
     res=>{
         console.log(res.data.data.results
             )
             store.dispatch({ 
                 type: 'COMIC',
                 payload: res.data.data.results
             });
     }  
   )}
   
   export const stories = async () =>{
    await axios.get(BASE_URL + STORIES_ROUTE)
   .then(
     res=>{
         console.log(res.data.data.results
             )
             store.dispatch({ 
                 type: 'STORIES',
                 payload: res.data.data.results
             });
     }  
   )}
