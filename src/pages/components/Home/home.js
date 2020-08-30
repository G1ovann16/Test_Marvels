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

const  comic = () =>({
    
})

    return (
    <div>    
      <div class="bg-image">
        <div class="container">
          <div class="row">
            <div class="col-6 my-auto">
              <h1>Captain America</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur quod totam doloremque, nulla veritatis dolorem? Perferendis, vero. Magni corrupti odit rerum maiores assumenda quam, quos repudiandae architecto in saepe.</p>
              <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
              <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
            </div>
            <div class="col-6">
              <img src="captain.png" alt="" width="100%"/>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container mt-3">
        <div class="text-center">
          <h3 class="subtitle">Best Movies</h3>
          <p class="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit dolore cupiditate vel ut quo alias.</p>
          <div class="row">
            <div class="col-4">
              <img src={'https://i.pinimg.com/736x/ba/9b/36/ba9b3623c9a639296e85f7ff09c3c205.jpg'} alt="" width="100%"/>
              <h6 class="mt-3">Capitan America 1</h6>
              <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rem earum recusandae consectetur, eum amet odit beatae nihil nam dolorum a ipsa autem, optio praesentium, iure officiis iste dolorem fuga?</p>
              <h6><span>2020</span></h6>
            </div>
            <div class="col-4">
              <img src={'../images/movie.jpg'} alt="" width="100%"/>
              <h6 class="mt-3">Capitan America 2</h6>
              <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rem earum recusandae consectetur, eum amet odit beatae nihil nam dolorum a ipsa autem, optio praesentium, iure officiis iste dolorem fuga?</p>
              <h6><span>2017</span></h6>
            </div>
            <div class="col-4">
              <img src={'../images/movie.jpg'} alt="" width="100%"/>
              <h6 class="mt-3">Capitan America 3</h6>
              <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rem earum recusandae consectetur, eum amet odit beatae nihil nam dolorum a ipsa autem, optio praesentium, iure officiis iste dolorem fuga?</p>
              <h6><span>2010</span></h6>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container mt-3">
        <div class="text-center">
          <h3 class="subtitle">Best Comics</h3>
          <p class="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit dolore cupiditate vel ut quo alias.</p>
          <div class="row">
            <div class="col-2">
              <img src={'../../images/comic.jpg'} alt="" width="100%"/>
            </div>
            <div class="col-2">
              <img src={'../images/comic.jpg'} alt="" width="100%"/>
            </div>
            <div class="col-2">
              <img src={'../images/comic.jpg'} alt="" width="100%"/>
            </div>
            <div class="col-2">
              <img src={'../images/comic.jpg'} alt="" width="100%"/>
            </div>
            <div class="col-2">
              <img src={'../images/comic.jpg'} alt="" width="100%"/>
            </div>
            <div class="col-2">
              <img src={'../images/comic.jpg'} alt="" width="100%"/>
            </div>
          </div>
        </div>
      </div>
</div>      
    );
  }
  
 
const mapsStateToProps = (state) =>({...state})

export default connect(mapsStateToProps)(Home);


{/* <div className="Home container-fluid"> */}
        //     <div className="col">
        //         <div className="row">
        //         {props.hero?.name}
        //         {props.hero?.description}
        //         </div> 
        //         <div className="row">
        //         <img src={props.hero?.thumbnail?.path+'.'+props.hero?.thumbnail?.extension}/>
        //             {props.comic?.map(com=>(
        //             console.log(com.id)
        //             ))}
        //         </div>   
        //     </div>
        //         <p>
        //     </p>
        // </div>