 import React from 'react'
 
 const Store = (Newcop ) => {
   
  return  function loder  (props){
     if(props.lod){
      return <h1>......loding data......</h1>
     }
     return <Newcop {...props}/>
  } 
 }
 
 export default Store
 