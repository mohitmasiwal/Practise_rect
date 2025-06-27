 import React, { useReducer } from 'react'
 

 let initialstate={
  count:0,
  name:"counter"
}

function reducer(state ,action){
    if(action.type === "inc"){
      return  { ...state,  count: state.count++}
    }
    if(action.type === "dec"){
      return  { count: state.count--}
    }
}

 const App = () => {
  const [state ,dispatch] = useReducer(reducer ,initialstate) 
   return (
     <div>
      <h1>{state.count}</h1>
      <p>{state.name}</p>
       <button onClick={()=> dispatch({type:"inc"})}>inc</button>
       <button onClick={()=> dispatch({type:"dec"})}>dec</button>
      
     </div>
   )
 }
 
 export default App


 
 