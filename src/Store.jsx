import { configureStore } from "@reduxjs/toolkit";

 import TestReducer from "./Test"
import { Loggerfor } from "./Logger";

 const store = configureStore({
  reducer:{ 
    Test: TestReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Loggerfor)
 })
 export default store;