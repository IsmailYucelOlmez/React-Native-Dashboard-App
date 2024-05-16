import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import {apiSlice} from './slices/apiSlice'
import settingsReducer from './slices/settingsSlice'


const store= configureStore({
reducer: {
    user:userSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
    settings:settingsReducer,
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), 
})

export default store;