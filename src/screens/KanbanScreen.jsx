import React, { useEffect, useState } from 'react'
import { View,Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const KanbanScreen = () => {

    const rawdata=[
        {
           id:1,
           task:'görev 1',
           state:'todo'
        },
        {
            id:2,
            task:'files updated and uploaded',
            state:'beingdone',
        },
        {
            id:3,
            task:'görev3',
            state:'done',
        },
        {
            id:4,
            task:'görev4',
            state:'todo',
        }
    ]

    const [data,setData]=useState(rawdata);
   

    const nextStatu=(element)=>{
        const updatedData = data.map((task) => {
            if (element.id === task.id && task.state === "todo") {
                task.state = "beingdone";
            } else if (element.id === task.id && task.state === "beingdone") {
                task.state = "done";
            }
            return task;
        });
    
        
        setData(updatedData);
        
        
    }

    const prevStatu=(element)=>{
        const updatedData = data.map((task) => {
            if (element.id === task.id && task.state === "done") {
                task.state = "beingdone";
            } else if (element.id === task.id && task.state === "beingdone") {
                task.state = "todo";
            }
            return task;
        });
    
        
        setData(updatedData);
    }
    

  return (
    <SafeAreaView className="w-full ">
        <Navbar/>
        <Sidebar/>
      <View className="w-full flex flex-row justify-around border-b-2 mb-4">
        <Text className="text-lg font-semibold">To Do</Text>
        <Text className="text-lg font-semibold">Being Done</Text>
        <Text className="text-lg font-semibold">Done</Text>
      </View>
      <View className="w-full flex flex-row ">
        <View className="border-r w-1/3 py-3">
          {data.filter((e,i)=>e.state=="todo").map((element,i)=>(
            <View>
                <Text className="text-center font-semibold">{element.task}</Text>
                <Pressable className="w-full flex flex-row justify-end px-3" onPress={()=>nextStatu(element)}><AntDesign name="arrowright" size={18} color="black" /></Pressable> 
            </View>
          ))}
        </View>
        <View className="border-r w-1/3 py-3">
          {data.filter((e,i)=>e.state=="beingdone").map((element,i)=>(
            <View>
                <Text className="text-center font-semibold">{element.task}</Text>
                <View className="w-full flex flex-row justify-between px-3">
                    <Pressable onPress={()=>prevStatu(element)}><AntDesign name="arrowleft" size={18} color="black" /></Pressable>
                    <Pressable onPress={()=>nextStatu(element)}><AntDesign name="arrowright" size={18} color="black" /></Pressable>
                </View>
            </View>
          ))}
        </View>
        <View className="w-1/3 py-3">
          {data.filter((e,i)=>e.state=="done").map((element,i)=>(
            <View >
                <Text className="text-center font-semibold">{element.task}</Text> 
                <Pressable className="w-full flex flex-row justify-start px-3" onPress={()=>prevStatu(element)}><AntDesign name="arrowleft" size={18} color="black" /></Pressable>
                             
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default KanbanScreen
