import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text,Image } from 'react-native';
import Notifications from './dropdowns/Notifications';
import Messages from './dropdowns/Messages';
import UserProfile from './dropdowns/UserProfile';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '../redux/slices/settingsSlice';
const Avatar = require('../../assets/avatar.jpg');


const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState("");
  const {mobileMenu}=useSelector((state)=>state.settings)
  const dispatch=useDispatch();


  return (
    <View className="flex flex-row justify-between items-center px-4 content-between border-b-2 border-black dark:border-white h-16 relative">
      
      <View className="flex flex-row items-center gap-3">
        <TouchableOpacity onPress={() => dispatch(toggleMobileMenu())}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold" >Company Inc.</Text>
      </View>
      
      <View className="flex flex-row items-center gap-2">
              
          <TouchableOpacity onPress={() => setActiveMenu(activeMenu !== "message" ? "message" : "")}>
            {activeMenu === "message" ? <MaterialCommunityIcons name="message" size={24} color="black" /> :<Feather name="message-square" size={24} color="black" /> }
          </TouchableOpacity>
        
       
          <TouchableOpacity onPress={() => setActiveMenu(activeMenu !== "notification" ? "notification" : "")}>
            {activeMenu === "notification" ? <Ionicons name="notifications" size={24} color="black" /> : <Ionicons name="notifications-outline" size={24} color="black" />}
          </TouchableOpacity>
        
        
          <View className="flex flex-row items-center gap-2">
            <Image source={Avatar} className="w-10 h-10 rounded-full" />
            <Text className="font-semibold hidden md:block">Micheal</Text>
            <TouchableOpacity onPress={() => setActiveMenu(activeMenu !== "profile" ? "profile" : "")}>
              {activeMenu === "profile" ? <Entypo name="chevron-down" size={24} color="black" /> : <Entypo name="chevron-up" size={24} color="black" />}
            </TouchableOpacity>
          </View>
        


        {activeMenu === "notification" && (
          <Notifications setActiveMenu={setActiveMenu} />
        )}

        {activeMenu === "message" && (
          <Messages />
        )}

        {activeMenu === "profile" && (
          <UserProfile setActiveMenu={setActiveMenu} />
        )}
        
      
    
      </View>
    </View>
  )};

export default Navbar;

