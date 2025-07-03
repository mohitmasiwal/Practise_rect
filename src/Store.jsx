import { Children, createContext, useState } from "react";

 

export const Mycontext = createContext();

export const Myprovider=({children})=>{

const [count ,setcount] = useState(55)

 function inc(){
  setcount(pre=>pre+6)
 }

  return (
    <Mycontext.Provider value={[count,setcount,inc]}>
      {children}
    </Mycontext.Provider>
  )
}
