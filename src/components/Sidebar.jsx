import React, { useState } from 'react'
import { View,Text, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu, updateTheme,updateThemeColor,saveTheme,saveThemeColor } from '../redux/slices/settingsSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const Sidebar = () => {

  const [settings,setSettings]=useState(false)
  const {mobileMenu}=useSelector((state)=>state.settings)
  const {themeColor}=useSelector((state)=>state.settings)
  const {theme}=useSelector((state)=>state.settings)
  const dispatch=useDispatch();
  const navigation=useNavigation();
  const route=useRoute();

  const toggleMenu=()=>{
    if(settings==true){
         
    }
    else{
      dispatch(toggleMobileMenu())
    }
  }

  const changeTheme=(value)=>{

    dispatch(updateTheme(value));
    saveTheme()
  }

  const changeThemeColor=(value)=>{

    dispatch(updateThemeColor(value));
    saveThemeColor()
  }

  const navigateScreen=(value)=>{
    navigation.navigate(value)
    dispatch(toggleMobileMenu())
  }


  return (
    <TouchableOpacity onPress={()=>toggleMenu()} className={`${(mobileMenu || settings) ? 'w-full':'w-0'} z-30`}>
      <SafeAreaView className={`${(mobileMenu || settings) ? 'w-full':'w-0'} h-screen absolute top-0 left-0  z-30`} >
    
        <ScrollView className={`bg-[#fff] dark:bg-slate-800 dark:text-white ${(mobileMenu || settings) ? 'block':'hidden'} w-1/2 h-screen absolute py-6 rounded-md transition-transform transform -translate-x-full ease-in-out duration-300`}>

        <TouchableOpacity onPress={()=>navigateScreen("home")} className='flex flex-row justify-center items-center gap-2'>
          <MaterialCommunityIcons name="view-dashboard-outline" size={36} color="black" />
          <Text className='xs:text-lg md:text-xl font-bold'>Dashboard</Text>
        </TouchableOpacity> 


    {!settings ? (
      <View className='flex flex-col items-center gap-4 mt-5'>

        <Pressable onPress={()=>navigateScreen("HomeScreen")} className={`flex flex-row py-0.5 w-3/4 rounded-xl items-center justify-center ${route.name === "home" ? `bg-[${themeColor}] ` : ''}`} ><Entypo name="home" size={20} color={`${route.name=="home" ? 'white':'black'}`}/><Text className={`ml-3 ${route.name==="home" ? 'text-white text-lg font-semibold':'text-base'} `}>Home</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("CustomerScreen")} className={`flex flex-row py-1 w-3/4 rounded-xl items-center justify-center ${route.name === "customer" ? `p-1 bg-[${themeColor}] ` : ''}`} ><FontAwesome5 name="user-tag" size={20} color={`${route.name=="customer" ? 'white':'black'}`}/><Text className={`ml-3 ${route.name==="customer" ? 'text-white text-lg font-semibold':'text-base'} `}>Customer</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("EmployeeScreen")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "employee" ? `bg-[${themeColor}] ` : ''}`} ><FontAwesome5 name="user-tie" size={20} color={`${route.name=="employee" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="employee" ? 'text-white text-lg font-semibold':'text-base'} `}>Employees</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("product")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "product" ? `bg-[${themeColor}] ` : ''}`} ><FontAwesome5 name="product-hunt" size={20} color={`${route.name=="product" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="product" ? 'text-white text-lg font-semibold':'text-base'} `}>Product</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("order")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "order" ? `bg-[${themeColor}] ` : ''}`} ><FontAwesome5 name="shopping-cart" size={20} color={`${route.name=="order" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="order" ? 'text-white text-lg font-semibold':'text-base'} `}>Order</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("calendar")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "calendar" ? `bg-[${themeColor}] ` : ''}`} ><Ionicons name="calendar-clear" size={20} color={`${route.name=="calendar" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="calendar" ? 'text-white text-lg font-semibold':'text-base'} `}>Calendar</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("kanban")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "kanban" ? `bg-[${themeColor}] ` : ''}`} ><MaterialIcons name="view-kanban" size={20} color={`${route.name=="kanban" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="kanban" ? 'text-white text-lg font-semibold':'text-base'} `}>Kanban</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("LineChartScreen")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "line-chart" ? `bg-[${themeColor}] ` : ''}`} ><AntDesign name="linechart" size={20} color={`${route.name=="line-chart" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="line-chart" ? 'text-white text-lg font-semibold':'text-base'} `}>Line</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("PieChartScreen")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "pie-chart" ? `bg-[${themeColor}] ` : ''}`} ><AntDesign name="piechart" size={20} color={`${route.name=="pie-chart" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="pie-chart" ? 'text-white text-lg font-semibold':'text-base'} `}>Pie</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("BarChartScreen")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "bar-chart" ? `bg-[${themeColor}] ` : ''}`} ><AntDesign name="barschart" size={20} color={`${route.name=="bar-chart" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="bar-chart" ? 'text-white text-lg font-semibold':'text-base'} `}>Bar</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("AreaChart")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "area-chart" ? `bg-[${themeColor}] ` : ''}`} ><AntDesign name="areachart" size={20} color={`${route.name=="area-chart" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="area-chart" ? 'text-white text-lg font-semibold':'text-base'} `}>Area</Text></Pressable>
        <Pressable onPress={()=>navigateScreen("StackedBarChartScreen")} className={`flex flex-row py-1 w-3/4  rounded-xl items-center justify-center ${route.name === "stacked" ? `bg-[${themeColor}] ` : ''}`} ><MaterialIcons name="stacked-bar-chart" size={20} color={`${route.name=="stacked" ? 'white':'black'}`}/><Text  className={`ml-3 ${route.name==="stacked" ? 'text-white text-lg font-semibold':'text-base'} `}>Stacked</Text></Pressable>
        
        <TouchableOpacity onPress={()=>{setSettings(true); toggleMobileMenu()}} className="flex flex-row py-2 w-3/4 rounded-xl items-center justify-center ">
          <Ionicons name="settings" size={20} color="black" /><Text className="ml-3 text-base">Settings</Text></TouchableOpacity>
        
      </View>

    ):(
      <View className='w-full h-screen mt-10 flex flex-col items-center '>

        <View className='w-3/4 flex flex-col justify-center items-center gap-4'>
          <Text className='text-lg font-semibold'>Theme Color</Text>
  
          <TouchableOpacity onPress={()=>changeThemeColor("#e63946")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#e63946]">{themeColor=="#e63946" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#457b9d")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#457b9d]">{themeColor=="#457b9d" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#00BCD4")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#00BCD4]">{themeColor=="#00BCD4" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#fca311")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#fca311]">{themeColor=="#fca311" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#6a994e")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#6a994e]">{themeColor=="#6a994e" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#e07a5f")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#e07a5f]">{themeColor=="#e07a5f" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          <TouchableOpacity onPress={()=>changeThemeColor("#7209b7")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#7209b7]">{themeColor=="#7209b7" &&<Entypo name="check" size={16} color="white" />}</TouchableOpacity>
          

        </View>

        <View className='w-3/4 flex flex-col justify-center items-center my-10'>
          <Text className='text-lg font-semibold'>Theme</Text>

          
          <TouchableOpacity className="mt-3" onPress={()=>{theme=="light" ?changeTheme("dark"):changeTheme("light")}} >
            {theme=="light" ? (     
              <MaterialIcons name="sunny" size={24} color="black" />
            ):(
              <Ionicons name="moon" size={24} color="black"/>
            )}        
          </TouchableOpacity>
          

        </View>
        
        <AntDesign onPress={()=>{setSettings(false);dispatch(toggleMobileMenu())}} name="close" size={24} color="black" />

      </View>
    )}

        </ScrollView>
    
      </SafeAreaView>
    </TouchableOpacity>
  )
}

export default Sidebar
