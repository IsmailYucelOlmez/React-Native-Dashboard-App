import React, { useState } from 'react'
import { Button, ImageBackground, Pressable, TextInput } from 'react-native'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginBackground from '../../assets/loading_bg.jpeg'

const LoginScreen = () => {

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  const login=()=>{

  }
  
  return (
    <SafeAreaView className=" h-full w-full">
      <ImageBackground source={LoginBackground} resizeMode='cover' className="w-full h-full flex justify-center items-center">
      <View className="flex flex-col justify-center items-center gap-5">
        <Text className="text-4xl font-bold text-white">LOGIN</Text>
        <TextInput className="border border-black bg-white px-2 py-1 rounded-lg w-48" value={name} onChangeText={setName} placeholder='Enter User Name'/>
        <TextInput className="border border-black bg-white px-2 py-1 rounded-lg w-48 " secureTextEntry value={password} onChangeText={setPassword} placeholder='Enter Password'/>
        <Pressable onPress={()=>login()} className="py-1.5 w-48 border rounded-xl bg-[#00a884] border-white"><Text className="text-lg font-semibold text-white text-center">LOGIN</Text></Pressable> 
       
      </View>
      
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen
