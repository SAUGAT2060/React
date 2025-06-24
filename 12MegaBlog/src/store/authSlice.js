import {createSlice} from '@reduxjs/toolkit';


  const intialState = {

    status:false,
    userData: null
  }
const authSlice = createSlice({

  name:"auth",
  intialState,
  reducers:{
        login:(state,action)=>{

          state.status = true;
        }
  }
})

export default authSlice.reducer;