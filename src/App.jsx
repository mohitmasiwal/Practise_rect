import React from 'react'


function outer(){
 let  count=0;
  return function inner(){
   console.log(count+1);
   
  }
}
let newD = outer()
newD()
newD()

const App = () => {
  return (
    <div>
      
  


    </div>
  )
}

export default App
