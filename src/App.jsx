import { useDispatch, useSelector } from "react-redux"
import { fetchUser, login } from "./Test"

 const App = () => {
  const islogin = useSelector((state)=> state.Test.islogin)
  console.log(islogin);
  
  const dispatch = useDispatch()
   return (
     <div>
       <h1> this id {islogin}</h1>
       <button onClick={()=> dispatch(login(false))}>inc</button>
       <button onClick={()=> dispatch(fetchUser())}>fetch</button>
     </div>
   )
 }
 
 export default App
 