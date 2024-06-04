import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Notification = ({ setActiveMenu }) => {
  return (
    <View className="absolute w-64 rounded-lg p-3 bg-white dark:bg-slate-600 -bottom-80 -mb-2 right-2 ">
     
      <Text className="font-bold text-lg text-left">Notifications</Text>

      <View className="flex flex-row gap-2 mt-2 items-center">
        <Image source={""} className="w-14 h-14 md:w-64 md:h-64 rounded-full" />
        <View>
          <Text className="font-bold text-base">Sophia S.</Text>
          <Text>Welcome to team</Text>
        </View>
      </View>

      <View className="flex flex-row gap-2 mt-2 items-center">
        <Image source={""} className="w-14 h-14 rounded-full" />
        <View>
          <Text className="font-bold">Mike D.</Text>
          <Text>New files ready</Text>
        </View>
      </View>

      <View className="flex flex-row gap-2 mt-2 items-center">
        <Image source={""} className="w-14 h-14 md:w-64 md:h-64 rounded-full" />
        <View>
          <Text className="font-bold text-base">Mike D.</Text>
          <Text>Meeting Date Changed</Text>
        </View>
      </View>

      <Pressable className="p-2 mt-2 bg-[#3e92cc] rounded-xl border border-white hover:border-[#3e92cc]" onPress={() => {}}>
        <Text className="text-center text-white text-base">See All Notifications</Text>
      </Pressable>
    </View>
  );
};

export default Notification;
