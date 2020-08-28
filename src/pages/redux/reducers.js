import { handleActions } from "redux-actions"; 
import { HERO } from "./actions";

export default handleActions({
    [HERO]:(state, action)=>{
        return {
            ...state,
            info: action.payload
        }
    }
});

// const reducer = (state = {product_cart: [] }, action) => {
//     switch (action.type) {
//         case 'hero':
//             return {
//                 ...state,
//                 products: action.payload
//             }

//         default:
//             return state;
//     }
    
// };

// export default reducer; 