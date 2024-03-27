import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState={
  mobileMenu: false,
  themeColor:"#00BCD4",
  theme:"light",
  value:0,
}

export const settingsSlice = createSlice({
name: 'settings',
initialState:initialState,
reducers: {
toggleMobileMenu:(state)=>{
  state.mobileMenu=!state.mobileMenu
},
updateThemeColor:(state,action)=>{
  state.themeColor=action.payload;

},
updateTheme:(state,action)=>{
  state.theme=action.payload
},


},

})

export const saveTheme=async()=>{ 
 await AsyncStorage.setItem('theme',initialState.theme)
}

export const saveThemeColor=async()=>{
 await AsyncStorage.setItem('themeColor',initialState.themeColor)
}

export const getTheme=async()=>{

  let themeOption=await AsyncStorage.getItem('theme');
  if(themeOption===null){
      await AsyncStorage.setItem('theme',initialState.theme);
       themeOption=await AsyncStorage.getItem('theme');
  }
  return themeOption;
}

export const getThemeColor=async()=>{

  let themeColorOption=await AsyncStorage.getItem('themeColor');
  if(themeColorOption===null){
      await AsyncStorage.setItem('themeColor',initialState.themeColor);
      themeColorOption=await AsyncStorage.getItem('themeColor');
  }
  return themeColorOption;
}


export const { toggleMobileMenu, updateThemeColor,updateTheme} = settingsSlice.actions


export default settingsSlice.reducer
