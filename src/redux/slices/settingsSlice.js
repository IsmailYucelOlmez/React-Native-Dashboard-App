import { createSlice } from '@reduxjs/toolkit'



export const settingsSlice = createSlice({
name: 'counter',
initialState: {
mobileMenu: false,
themeColor:"#",
theme:"light",
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


export const { increment, decrement, incrementByAmount } = settingsSlice.actions


export default settingsSlice.reducer
