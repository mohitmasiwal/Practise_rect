 import React, { useState } from 'react'
 
 const App = () => {
  const [count ,setcount]= useState(0);
  function inc(){
    setcount(pre=>pre+5)
  }
   return (
     <div>
       <h1>{count}</h1>
       <h1></h1>
       <button onClick={()=>inc()}>inc</button>
     </div>
   )
 }
 
 export default App
 