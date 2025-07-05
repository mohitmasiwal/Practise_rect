import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



 export const Fetchdata = createAsyncThunk("auth/fetchdata", async()=>{
  let p1 = await fetch("https://jsonplaceholder.typicode.com/users");

      let data = await  p1.json()
     return data
})

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        count:0,
        islogin:false
    },
    reducers:{
     login:(state)=>{
    state.count++
    state.islogin = !state.islogin
     }
    },
extraReducers:(builder)=>{
    builder
    .addCase(Fetchdata.fulfilled,(state,action)=>{
        console.log(action.payload);
        
    })

     
}

})

export const {login} = AuthSlice.actions;
export default AuthSlice.reducer;