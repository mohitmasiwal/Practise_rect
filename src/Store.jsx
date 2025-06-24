 import React from 'react'
 
 const Store = (NewComponent) => {
   
  function StoreLogic (props){
    return (
      <>
      <h1>i am the logic reusable from a HOC</h1>
      <NewComponent {...props}/>
      </>
    )
  }
    return StoreLogic
 }
 
 export default Store
 