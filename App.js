import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({ default: "native" });


export default function App() {
  return (
    <Provider store={store}>
      
      <RootNavigator/>
      
    </Provider>
    
  );
}


