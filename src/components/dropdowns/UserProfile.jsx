import React from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Avatar = require('../../../assets/avatar.jpg');


const UserProfile = ({ setActiveMenu }) => {

  
  return (
    <View className="absolute w-56 p-2 bg-white -bottom-80 -mb-12 right-0 z-20">
      
      <Text className="font-bold text-lg text-left">User Profile</Text>
        
      <View className="flex-row items-center gap-3 mt-2">
        <Image source={Avatar} className="w-14 h-14 rounded-full" />
        <View>
          <Text className="font-bold ">Micheal C.</Text>
          <Text>Admin</Text>
          <Text className="hidden lg:flex">micheal@gmail.com</Text>
        </View>
      </View>
      
      <TouchableOpacity className="flex-row items-center gap-4 mt-2 pl-1.5">
        <FontAwesome name="dollar" size={24} color="black" />
        <View>
          <Text>My Account</Text>
          <Text className="text-sm font-thin">Account Settings</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity className="flex-row items-center gap-4 mt-2">
        <FontAwesome6 name="inbox" size={24} color="black" />
        <View>
          <Text>My Inbox</Text>
          <Text className="text-sm font-thin">Messages & Emails</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity className="flex-row items-center gap-4 mt-2">
        <MaterialIcons name="checklist" size={24} color="black" />
        <View>
          <Text>My Tasks</Text>
          <Text className="text-sm font-thin">To-do and Daily Tasks</Text>
        </View>
      </TouchableOpacity>
      
      <Pressable className="p-1 py-2 mt-2 bg-[#D8315B] rounded-xl w-full border border-white hover:border-[#D8315B]">
        <Text className="text-white text-center text-base">Logout</Text>
      </Pressable>
    </View>
  );
};

export default UserProfile;
