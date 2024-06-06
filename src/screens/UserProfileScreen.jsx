import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View,Text, Pressable } from 'react-native'
import { useGetMessagesByReceiverIdQuery, useGetTasksByAssignedIdQuery, useGetUserByIdQuery } from '../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { changeId, changeName, changeRole } from '../redux/slices/userSlice';
import UserForm from '../components/forms/UserForm';
import MessageForm from '../components/forms/MessageForm'

const UserProfileScreen = () => {

  const [selectedTab,setSelectedTab]=useState("message");
  const [showPassword,setShowPassword]=useState(false);
  const [absoluteFormType,setAbsoluteFormType]=useState("");
  
  const dispatch=useDispatch();
  const {id}=useSelector((state)=>state.user);
  const {name}=useSelector((state)=>state.user)
  const navigation=useNavigation();
  
  const messageData=useGetMessagesByReceiverIdQuery(id);
  const taskData=useGetTasksByAssignedIdQuery(id);
  const userData=useGetUserByIdQuery(id);

  const changeTab=()=>{
    if(selectedTab=="tasks") setSelectedTab("message")
    else setSelectedTab("tasks")
  }

  const logout=()=>{
      dispatch(changeName(""))
      dispatch(changeId(0))
      dispatch(changeRole(""))
      navigation.navigate("LoginScreen");
  }


  return (
    <SafeAreaView className="min-h-screen">
      <ScrollView>
        <Navbar/>
        <Sidebar/>

        <View className="mt-3 w-full flex flex-col gap-8">
            <View className="flex flex-row justify-center items-center gap-3">
                <Text className="text-lg font-semibold" >User Profile </Text>
                <Pressable onPress={()=>setAbsoluteFormType("user")}>
                    <FontAwesome6 name="pencil" size={16} color="black" />
                </Pressable>  
            </View>
            
            <View className="flex flex-col items-center gap-3">
                <Text>{userData?.data?.userName}</Text>
                <View className="flex flex-row gap-3">
                    {showPassword && (
                        <Text>{userData?.data?.password}</Text>
                    )}
                    {showPassword ? (
                        <Pressable onPress={()=>setShowPassword(false)}>
                            <FontAwesome name="unlock" size={16} color="black" />
                        </Pressable>
                        
                    ):(
                        <Pressable onPress={()=>setShowPassword(true)}>
                            <FontAwesome name="lock" size={16} color="black" />
                        </Pressable>
                        
                    )}

                </View>
                <Text>{userData?.data?.email}</Text>
                <Text>{userData?.data?.phone}</Text>

                <Pressable onPress={()=>logout()} className="px-2 py-1 bg-[#e63946] rounded-xl w-1/2 border border-white hover:border-[#e63946]"><Text className="text-white text-center">Logout</Text></Pressable>
            </View>
            
        </View>

        <View className="mt-10">
            <View className="flex flex-row justify-around items-center">

                <View className="flex flex-row justify-center items-center gap-3">
                    <Text>Messages</Text>
                    <Pressable onPress={changeTab} className="w-8 h-4 border border-black relative rounded-lg">
                        <View className={`w-4 h-4 absolute rounded-lg bg-slate-600 ${selectedTab=="message" ? 'left-0':'right-0'} `}></View>
                    </Pressable>
                    <Text>Tasks</Text>
                </View>

                <Pressable onPress={()=>setAbsoluteFormType("message")} className="flex flex-row justify-center items-center gap-3">
                    <Text>Send Message</Text>
                    <FontAwesome6 name="message" size={16} color="black" />
                </Pressable>

            </View>

            <View className="w-full flex flex-row items-center gap-2 flex-wrap px-3 py-1 mt-3">

            {selectedTab=="message" ? (


                messageData?.data ? (
            
                    messageData?.data?.map((e,i)=>(
                      <View key={i} className='w-1/3 h-36 flex flex-col justify-between border border-black rounded-xl p-3'>
                        <Text>{e.messageTitle}</Text>
                        <Text className="text-sm">{e.messageText}</Text>
                        <Text className='text-xs text-right '>{e.senderId}</Text>
                      </View>
                    ))
                  ):(
                    <Text>loading...</Text>
                  )
            ):(
                taskData?.data ? (
            
                    taskData?.data?.map((e,i)=>(
                      <View key={i} className='w-1/3 h-36 flex flex-col gap-3 border border-black rounded-xl p-0.5'>
                        <Text className='text'>{e.taskTitle}</Text>
                        <Text className="text-sm">{e.taskText}</Text>
                      </View>
                    ))
                  ):(
                    <Loading/>
                  )
            )}
            </View>
  
        </View>

        {absoluteFormType=="user" && (

            <UserForm operation={"PUT"} id={id} setAbsoluteFormType={setAbsoluteFormType}/>
        )}

        {absoluteFormType=="message" && (

            <MessageForm setAbsoluteFormType={setAbsoluteFormType}/>
        )}

      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfileScreen
