import { useDispatch, useSelector } from "react-redux"
import { fetchUser, login } from "./Test"
import { HOC } from "./HOC";
import Logger from "./Logger";

 const App = () => {
 
   const Enh = HOC(Logger)
  const dispatch = useDispatch()
   return (
     <div>
     
       <button onClick={()=> dispatch(login(false))}>inc</button>
       <button onClick={()=> dispatch(fetchUser())}>fetch</button>
       <Enh  isloding = {false}/>
     </div>
   )
 }
 
 export default App
 