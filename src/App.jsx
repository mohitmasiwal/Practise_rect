 import React, { useReducer } from 'react'
import { useContext } from 'react'
import { Mycontext } from './Test'
 

 let initialstate={
  count:0,
  count3:3
}
function reducer(state,action){
  if(action.type === "increment"){
    return{...state, count: state.count + 1}
  }
  if(action.type === "increment3"){
    return{...state, count3: state.count3 + 3}
  }

}

 const App = () => {
  const [state , dispatch]= useReducer(reducer , initialstate)
  const mydata = useContext(Mycontext)
   return (
     <div>
       <button>{state.count}</button>
       <button>{state.count3}</button>
       <button onClick={() => dispatch({ type: "increment" })}>increment</button>
       <button onClick={() => dispatch({ type: "increment3" })}>increment_3</button>
       <h1>{mydata}</h1>
     </div>
   )
 }
 
 export default App
 