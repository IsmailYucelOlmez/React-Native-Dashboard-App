import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
  name: "",
  id:0,
  role:""
  },
  reducers: {
  changeName: (state,action) => {
    state.name=action.payload;
    localStorage.setItem('name',state.name)
  },
  changeId: (state,action) => {
    state.id=action.payload
    localStorage.setItem('id',state.id)
  },
  changeRole: (state, action) => {
    state.role=action.payload
    localStorage.setItem('role',state.role)
  },
  },
  })


  export const { changeName, changeId, changeRole } = userSlice.actions

  export default userSlice.reducer