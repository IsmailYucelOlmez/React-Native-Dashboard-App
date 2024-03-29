import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
name: 'counter',
initialState: {
isAuth: false,
userId:null,
userName:null,
value:0,
},
reducers: {
increment: (state) => {

state.value += 1
},
decrement: (state) => {
state.value -= 1
},
incrementByAmount: (state, action) => {
state.value += action.payload
},
},
})


export const { increment, decrement, incrementByAmount } = userSlice.actions


export default userSlice.reducer
