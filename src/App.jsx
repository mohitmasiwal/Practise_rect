 import React, { useReducer } from 'react'
  Is ={
    count :0,
    name :"rahul"
  }


function reducer (state,action){
    if(action.type === "inc"){
      
    }
}

 const App = () => {
  const [state , disptch ] = useReducer(reducer , Is)
   return (
     <div>
       <button onClick={disptch({type:"inc"})}></button>
       <button onClick={disptch({type:"dec"})}></button>
     </div>
   )
 }
 
 export default App
 