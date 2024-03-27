import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const navigation=useNavigation();

  
  return (
    <SafeAreaView className="flex-1 bg-[#e5e5e5] " >
      <Sidebar/>
      <Navbar />
      
      <View className="">

        <View className="">
          <Text className="">Earnings</Text>
          <Text className="">63.288,23$</Text>
          <Pressable onPress={()=>{}}><Text>Download</Text></Pressable>
          
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate("")} className="">
          <FontAwesome name="dollar" size={24} color="white" />
        </TouchableOpacity>

      </View>

      <View>

        <View>

        </View>
        <View>

        </View>
        <View>

        </View>
        <View>

        </View>

      </View>
       
    </SafeAreaView>
  )
}

export default HomeScreen


