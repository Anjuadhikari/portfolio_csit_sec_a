import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
// import Homescreen from './home'
// var container=document.getElementById("root")
import Navbar from './Navbar';

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <>
     <Navbar test="DATA From Render"/> 
  </>
)


// var root = ReactDom.createRoot(container)
// class MyClassComponent extends React.Component{
//   render(){
//     return <h2>this is class Component</h2>
//   }
// }
// function MyFunctionComponent(){
//   return(
//     <>
//     <h1>this is function Component</h1>
//     <p>we are in class</p>
//     </>
//     )
//   }

// root.render(
//   <><h1>react app</h1>
//   <i>italic text{20*30}</i>
//   <MyClassComponent/>
//   <MyFunctionComponent/>
//   <Homescreen/>
//   </>
 
  
  
// )
