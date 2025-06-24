 import React, { useReducer } from 'react'
 

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
   return (
     <div>
       <button>{state.count}</button>
       <button>{state.count3}</button>
       <button onClick={() => dispatch({ type: "increment" })}>increment</button>
       <button onClick={() => dispatch({ type: "increment3" })}>increment_3</button>
     </div>
   )
 }
 
 export default App
 