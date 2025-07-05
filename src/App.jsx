 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fetchdata, login } from './AuthSlice'
   
 const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.auth.count)
   return (
     <div>
      {count}
       <button onClick={()=>dispatch(login())}>lopgin</button>
       <button onClick={()=>dispatch(Fetchdata())}>fetch </button>
     </div>
   )
 }
 
 export default App
 