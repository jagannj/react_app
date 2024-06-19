// import {createSlice} from "@reduxjs/toolkit";
// const intialState ={};
// const userSlice = createSlice({
//     name: 'user',
//     initialState:intialState,
//     reducers:{
//         addUser(state,action){
//             state= action.payload;
//         }
//     }
// })
// // action creator
// export const {addUser}=userSlice.actions;
// // slice reducer
// export default userSlice.reducer

// ==================================

import {createSlice} from "@reduxjs/toolkit";

const intialState ={
    currentUser: null,
    loading:false,
    error: false
};
const userSlice = createSlice({
    name: 'user',
    initialState:intialState,
    reducers:{
        siginInStart:(state) =>{
            state.loading = true;
        },
        signinSucess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading= false;
            state.error = false;

        },
        signinFailure:(state,action) =>{

            console.log("@@@@@@@@@")
            state.loading = false;
            state.error= action.payload;

        }
    }
})
// action creator
export const {siginInStart,signinSucess,signinFailure}=userSlice.actions;
// slice reducer
export default userSlice.reducer

