import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable, ImageBackground,Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import backgroundImage from '../../assets/dashboard-hero-section.svg'


const HomeScreen = () => {

  const navigation=useNavigation();
  const {themeColor}=useSelector((state)=>state.settings)

  const [firstNumber,setFirstNumber]=useState(0);
  const [secondNumber,setSecondNumber]=useState(0);
  const [answer,setAnswer]=useState(0);

  
  return (
    <SafeAreaView className="flex-1 bg-[#e5e5e5]" >
      <Sidebar/>
      <Navbar />
      
      <View className="bg-white dark:bg-slate-800 dark:border-white h-44 mx-3 mt-5 border border-black rounded-xl bg-hero-banner bg-no-repeat bg-center flex flex-row justify-between items-center">

        

        <View className="mx-2 ">
          <Text className="text-sm text-center">Earnings</Text>
          <Text className="font-semibold text-center">63.288,23$</Text>
          <Pressable onPress={()=>{}} className={`mt-3 p-1.5 rounded-lg bg-[${themeColor}]`}><Text className="text-sm text-white">Download</Text></Pressable>
          
        </View>

        

        <TouchableOpacity onPress={()=>navigation.navigate("")} className={`w-10 h-10 rounded-full bg-[${themeColor}] flex justify-center items-center mx-3`}>
          <FontAwesome name="dollar" size={18} color="white" />
        </TouchableOpacity>


      </View>

      <View className="flex flex-row h-44 bg-white dark:bg-slate-800 dark:border-white px-2 mx-3 mt-5 border border-black rounded-xl justify-between items-center">

        <View>
          <Text className="font-semibold text-center">9.654</Text>
          <Text className="text-sm text-center">Customers</Text>
        </View>
        <View>
          <Text className="font-semibold text-center">342</Text>
          <Text className="text-sm text-center">Products</Text>
        </View>
        <View>
          <Text className="font-semibold text-center">34.231</Text>
          <Text className="text-sm text-center">Sales</Text>
        </View>
        <View>
          <Text className="font-semibold text-center">4.233</Text>
          <Text className="text-sm text-center">Refunds</Text>   
        </View>

      </View>

       {/* <View>
        <TextInput value={firstNumber} keyboardType='numeric' placeholder='first number' className="border border-black" onChangeText={setFirstNumber}/>
        <TextInput value={secondNumber} keyboardType='numeric' placeholder='second number' className="border border-black" onChangeText={setSecondNumber}/>
        
        <View className="flex flex-row">
          <Pressable className="border border-black bg-cyan-500 p-2" onPress={()=>{setAnswer(Number(firstNumber)+Number(secondNumber))}}><Text>+</Text></Pressable>
          <Pressable className="border border-black bg-cyan-500 p-2" onPress={()=>{setAnswer(firstNumber-secondNumber)}}><Text>-</Text></Pressable>
          <Pressable className="border border-black bg-cyan-500 p-2" onPress={()=>{setAnswer(firstNumber/secondNumber)}}><Text>/</Text></Pressable>
          <Pressable className="border border-black bg-cyan-500 p-2" onPress={()=>{setAnswer(firstNumber*secondNumber)}}><Text>*</Text></Pressable>
        </View>

        <Text>Answer:{answer}</Text>

      </View>  */}
       
    </SafeAreaView>
  )
}

export default HomeScreen


