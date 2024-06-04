import React, { Fragment } from 'react'
import { Pressable, View } from 'react-native'
import { Text,ScrollView } from 'react-native'
import { useGetUsersQuery } from '../../redux/slices/apiSlice';
import { userColumns } from '../../../assets/columns';


const UserDataTable = ({state,setAbsoluteFormType,setSelectedId}) => {

  const userData=useGetUsersQuery();

  const showPopup=(value)=>{
    if(state=="admin"){
        setAbsoluteFormType("user")
        setSelectedId(value)
    }
  }

  return (
    <ScrollView className="rounded-lg py-3 px-1  mt-5 border flex flex-col bg-white w-full" >
      { userData?.data ?(
      <Fragment className="w-full">
        <View className="flex flex-row justify-between items-center m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg ">
          
          {userColumns?.map((e,i)=>(
           <Text className="text-sm">{e.name}</Text> 
          ))}
                
        </View>
        <View className="m-0.5 p-0.5 rounded-lg  flex flex-col gap-2 w-full">
          {userData.data?.map((e,i)=>(
            <Pressable onPress={()=>showPopup(e.id)} key={i} className=" p-0.5 border-b rounded-lg flex flex-row justify-between items-center gap-2 w-full">
                           
                <Text className="text-xs w-14 px-2 text-center">{e.userName}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.email}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.phone}</Text>
                <Text className="text-xs w-14 px-2 text-center">{e.roleId==1 ? 'User':'Admin' }</Text>
                
                                                                           
            </Pressable>
          ))}

        </View>

      </Fragment>
      ):(
        <View>
          <Text>yükleniyor...</Text>
        </View>
      )}

    </ScrollView>
  )
}

export default UserDataTable
