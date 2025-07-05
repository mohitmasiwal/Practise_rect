 import React, { memo } from 'react'
 
 const AAA = ({name}) => {
  console.log("i will check rerender ");
  
   return (
     <div>
    
       <h1> hellpo mate i </h1>
     </div>
   )
 }
 
 export default memo(AAA) 
 