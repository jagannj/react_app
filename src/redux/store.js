// import{configureStore} from "@reduxjs/toolkit";

// export const store = configureStore({
//     // reducer is provider , this object store data
//     reducer:{
//         users:userdataReducer
//     }
// })



// ====================================================================================

import{configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import userdataReducer from "./userSlice"
import storage from "redux-persist/lib/storage";
const rootReducer  = combineReducers({user: userdataReducer

});
const persistConfig = {
    // key is defined as key value pair any define
    key:'root',
    version:1,
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    // reducer:{
    //     // user:userdataReducer
    //     persistedReducer
    // },
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)

