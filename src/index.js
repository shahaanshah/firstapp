import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";


// const name ="js"
// const imgurl="./office.jpg" 
// const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  // const currDate = new Date().toLocaleDateString();
  //  <>  

  //  <h1 className = "header"> hello this is react {name} </h1>
  //   <p>  hello this is react {currDate} { currTime}</p>
  //  <div className ="box">
  //  <img  src= {imgurl} alt="this is  " />
  //  <img  src= {imgurl} alt="this is  " />
  //  <img  src= {imgurl} alt="this is  " />
  //  </div>
  //  </>,

  <BrowserRouter>
  <>
  
    <App />
    </>
  </BrowserRouter>,
  document.getElementById('root')
);

