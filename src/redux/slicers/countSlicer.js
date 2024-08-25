import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE={
    counter:0
}
const counter =createSlice({
    name:"counter",
    initialState:INITIAL_STATE,
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter=action.payload
            console.log(action);
        },
        decrmentCounter:(state,action)=>{
            state.counter=state.counter-1
        }
    }
})




export default counter.reducer
export const {incrementCounter,decrmentCounter}=counter.actions