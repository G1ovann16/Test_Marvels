// import { handleActions } from "redux-actions"; 
// import { HERO } from "./actions";

const hero = (state = {}, action) => {
    switch (action.type){
        case 'HERO':
            console.log(action.payload)
            return {
                ...state,
                hero: action.payload
            
            }
        default:
            return state;
    }
}

export default hero;

