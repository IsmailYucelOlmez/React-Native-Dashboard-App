import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable, ImageBackground,Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StackedBarChart } from 'react-native-chart-kit'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'


const HomeScreen = () => {

  const navigation=useNavigation();
  const {themeColor}=useSelector((state)=>state.settings)

  const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };

  
  return (
    <SafeAreaView className=" bg-[#e5e5e5]" >
      <ScrollView>
      <Navbar />
      <Sidebar/>
      
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

      <View className="flex flex-row h-40 bg-white dark:bg-slate-800 dark:border-white px-2 mx-3 mt-5 border border-black rounded-xl justify-between items-center">

        <View className="flex flex-col justify-center items-center">
          <View className="w-10 h-10 rounded-full bg-[#E5FAFB] flex justify-center items-center mb-1.5">
            <Ionicons name="people" size={20} color="#03C9D7"/>
          </View>
          
          <Text className="font-semibold text-center">9.654</Text>
          <Text className="text-xs text-center">Customers</Text>
        </View>
        <View className="flex flex-col justify-center items-center">
          <View className="w-10 h-10 rounded-full bg-[#fec90f] flex justify-center items-center mb-1.5">
            <Feather name="box" size={20} color="#fff4e5"/>
          </View>
          <Text className="font-semibold text-center">342</Text>
          <Text className="text-xs text-center">Products</Text>
        </View>
        <View className="flex flex-col justify-center items-center">
          <View className="w-10 h-10 rounded-full bg-[#fff4e5] flex justify-center items-center mb-1.5">
            <Feather name="bar-chart" size={20} color="#e46a76" />
          </View>
          <Text className="font-semibold text-center ">34.231</Text>
          <Text className="text-xs text-center">Sales</Text>
        </View>
        <View className="flex flex-col justify-center items-center">
          <View className="w-10 h-10 rounded-full bg-[#ebfaf2] flex justify-center items-center mb-1">
            <Feather name="refresh-ccw" size={20} color="#00c292" />
          </View>
          <Text className="font-semibold text-center ">4.233</Text>
          <Text className="text-xs text-center">Refunds</Text>   
        </View>

      </View>

      <View className="flex justify-center items-center">
      <LineChart
        data={line}
        width={Dimensions.get('window').width-20} 
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: {themeColor},
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#e5e5e5',
          decimalPlaces: 2, 
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        className="mt-6"
      />
      </View>

      <View className="flex justify-center items-center mb-6">
      <StackedBarChart
        data={data}
        width={Dimensions.get('window').width-20}
        height={220}
        chartConfig={{
          backgroundColor: {themeColor},
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            marginVertical:8,
            
          }
        }}
        className="mt-6"
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen


