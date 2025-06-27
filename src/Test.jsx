 import React from 'react'
 
 const Test = ({count,setcount}) => {
   return (
     <div>
       <h1>i am fromn child 2{count}</h1>
       <button onClick={()=>setcount(pre=>pre+1)}>inc</button>
     </div>
   )
 }
 
 export default Test
 