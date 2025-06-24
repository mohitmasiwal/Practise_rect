 import React, { createContext } from 'react'
 

 export  const  Mycontext = createContext();
 

 export const Myprovider =({children})=>{

  const data =[3,4,4,5,5,4,3,6,7,"jkbhbjhbech"]


return(
 < Mycontext.Provider value={data}>
 {children}
 </Mycontext.Provider>
)


 }