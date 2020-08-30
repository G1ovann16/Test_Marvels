import React, {useState, useEffect, useReducer} from "react";
import { connect } from "react-redux";
import { heroe, comic, stories } from "../../redux/actions";
const Home = (props) => {

const [hero, setHero]=useState('')

useEffect(() => {
    heroe();
    comic();
    stories();
    
}, []);
    return (
        <div className="Home container-fluid">
            <div className="col">
                <div className="row">
                {props.hero?.name}
                {props.hero?.description}

                </div> 
                <div className="row">
                <img src={props.hero?.thumbnail?.path+'.'+props.hero?.thumbnail?.extension}/>
                
                </div>   
            </div>
                <p>
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