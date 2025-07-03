import { configureStore } from "@reduxjs/toolkit";

 import TestReducer from "./Test"

 const store = configureStore({
  reducer:{ 
    Test: TestReducer
  }
 })
 export default store;