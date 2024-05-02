import { configureStore } from '@reduxjs/toolkit'
import {userSlice} from './slices/userSlice'
import {apiSlice} from './slices/apiSlice'
import settingsReducer from './slices/settingsSlice'


const store= configureStore({
reducer: {
    [userSlice.reducerPath]:userSlice.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    settings:settingsReducer,
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware,apiSlice.middleware), 
})

export default store;