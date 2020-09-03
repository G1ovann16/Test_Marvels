import axios from "axios";
import {  BASE_URL, CHARACTER_ROUTE, STORIES_ROUTE, COMIC_ROUTE, CHARACTER_LIST} from "../../api-config";
import store from "./store";
// export const HERO = 'hero';

export const heroe = async () =>{
  await axios.get(BASE_URL + CHARACTER_LIST)
  .then(
    res=>{
        console.log(res.data.data.results
            )
            store.dispatch({ 
                type: 'HERO',
                payload: res.data.data.results
            });
    }  
  )}

export const comic = async (id) =>{
  await axios.get(BASE_URL + 'characters/' + id +COMIC_ROUTE)
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
   
