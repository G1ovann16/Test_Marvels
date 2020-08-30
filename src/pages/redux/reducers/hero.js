// import { handleActions } from "redux-actions"; 
// import { HERO } from "./actions";

const hero = (state = {}, action) => {
    switch (action.type){
        case 'HERO':
            return {
                ...state,
                hero: action.payload
            }
        case 'STORIES':
            return {
                ...state,
                stories: action.payload
                }
        case 'COMIC':
            return {
               ...state,
               comic: action.payload
            }
        default:
            return state;
    }
}

export default hero;

