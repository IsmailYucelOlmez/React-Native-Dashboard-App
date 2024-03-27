import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import settingsReducer from './slices/settingsSlice'
import thunk from 'redux-thunk'



const store= configureStore({
reducer: {
    user:userReducer,
    settings:settingsReducer,
},

})

export default store;