import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from 'react';
import { getTheme, getThemeColor } from './src/redux/slices/settingsSlice';

NativeWindStyleSheet.setOutput({ default: "native" });

  //responsive design ?
  //dark mode


export default function App() {

  useEffect(()=>{
    getTheme();
    getThemeColor();
  },[])

  
  return (
    <Provider store={store}>
      
      <RootNavigator/>
      
    </Provider>
    
  );
}


