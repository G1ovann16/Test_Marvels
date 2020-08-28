
import axios from "axios";
import { API_URL } from "../../api-config";
import store from "./store";

import { createActions } from "redux-actions";

export const HERO = 'hero';

export const hero = async()=>{
    console.log('platano')
    try {
        const result = await  axios.get(API_URL) 
        const action = createActions((HERO) =>{

            return store.dispatch(action(result.data));
        })
        
    } catch (error) {
        console.log(error)
    }
} 

// export const hero = async() => {
//     console.log('platano')
//   try {
//       const res = await axios.get(API_URL)
//       store.dispatch({ 
//           type: HERO,
//           payload: res.data
//         });
//         console.log(res.data)
//   } catch (error) {
//       console.log(error)
      
//   }
// }
