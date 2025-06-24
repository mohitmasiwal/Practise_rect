 import React from 'react'
 
 const Store = () => {
   return ReactDOM.createPortal(
    <h1>this is a portal </h1>,
    document.getElementById("root_2")
   )
 }
 
 export default Store
 