import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 
 export const fetchUser = createAsyncThunk("Test/fetchuser", async ()=>{
  const p1 = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const data = await p1.json();
  return data;
})

   const TestSLice = createSlice({
  name:"Test",
  initialState:{
    islogin: true,
    user :[]
  },
  reducers:{
    login :(state,action)=>{
        state.islogin =  action.payload
    }
  },
  extraReducers:(builder)=>{
builder
.addCase(fetchUser.fulfilled,  (state,action)=>{
     state.user = action.payload
     console.log(action.payload)
})
.addCase(fetchUser.rejected ,(state)=>{
  console.log("failed to fetch data")
  state.islogin = !state.islogin
})
  }
 })
  export const {login} = TestSLice.actions
  export default TestSLice.reducer;