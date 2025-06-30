 import React, {   useMemo, useState } from 'react'
import Store from './Store';
import { TestPortal } from './Test';
 
 const App = () => {
  const [count ,setcount]= useState(0);
  function inc(){
    setcount(pre=>pre+5)
  }
  function dec(){
    setcount(pre=>pre-5)
  }


  
 

 
 
   return (
     <div>
       <h1>{count}</h1>
       <h1></h1>
       <button onClick={()=>inc()}>inc</button>
       <button onClick={()=>dec()}>inc</button>
       {count > 10 &&  <TestPortal/>}
      
       <Store  />
     </div>
   )
 }
 
 export default App
 