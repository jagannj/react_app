// import{configureStore} from "@reduxjs/toolkit";
import userdataReducer from "./userSlice"

// export const store = configureStore({
//     // reducer is provider , this object store data
//     reducer:{
//         users:userdataReducer
//     }
// })



// ====================================================================================

import{configureStore} from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:{
        user:userdataReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

