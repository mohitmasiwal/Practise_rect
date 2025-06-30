 import React, { memo } from 'react'
 
 const Store = ({test}) => {
   console.log("to check render");
   
   return (
     <div>
       <h1>i am store </h1>
         <button onClick={()=>test}>click</button>
     </div>
   )
 }
 
 export default memo(Store)
 