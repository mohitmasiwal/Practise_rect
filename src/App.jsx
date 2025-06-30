 import React, {   useMemo, useState } from 'react'
import Store from './Store';
 
 const App = () => {
  const [count ,setcount]= useState(0);
  function inc(){
    setcount(pre=>pre+5)
  }
  function dec(){
    setcount(pre=>pre-5)
  }


  let arr = new Array(4).fill(2)
const Add = useMemo(()=>{
   let i =0,n = arr.length,sum =0;
  while( i<n){
    sum += arr[i]
    i++
  }
 return
},[])
 

 
 
   return (
     <div>
       <h1>{count}</h1>
       <h1></h1>
       <button onClick={()=>inc()}>inc</button>
       <button onClick={()=>dec()}>inc</button>
       <h1>{Add}</h1>
       <Store  />
     </div>
   )
 }
 
 export default App
 