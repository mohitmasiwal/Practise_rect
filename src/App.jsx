 import React, { useContext } from 'react'
import { Mycontext } from './Store'
 
 const App = () => {
  const [count ,setcount,inc] = useContext(Mycontext)
   return (
     <div>
       <h1> this id{count}</h1>
       <button onClick={()=>inc()}>inc</button>
     </div>
   )
 }
 
 export default App
 