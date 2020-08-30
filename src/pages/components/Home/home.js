import React, {useState, useEffect, useReducer} from "react";
import { connect } from "react-redux";
import { heroe } from "../../redux/actions";
const Home = (props) => {
    const descriptions = '';
    const stories = '';

const [hero, setHero]=useState('')

useEffect(() => {
    heroe();
    
}, []);
    return (
        <div className="Home">
            <p>
                {props.hero?.name} 
                {/* <img src={image.path+'.'+image.extension}/> */}
                {props.hero?.description}
            </p>
        </div>
    );
  }
  
 
const mapsStateToProps = (state) =>({hero: state.hero})

export default connect(mapsStateToProps)(Home);









// function getData(){
    //     axios.get(BASE_URL + CHARACTER_ROUTE)
    // .then(
    //     res=>{console.log(res.data.data.results[0],res.data.data.results[0].thumbnail,res.data.data.results[0].thumbnail.path)
    //         setHero(res.data.data.results[0]);
    //         setImage(res.data.data.results[0].thumbnail)
    //     }
    // )
    // }

// const appReducer = (state, action)=>{
// switch (action.type){
//        case HERO:
//            return{
//                res: [...state.res, action.payload]
//            }; 
//     };
// };

// const initialState = {
//     users:[
//         { }
//     ]
// }
// const [state, dispatch] =  useReducer(
//     appReducer,
//     initialState
// );