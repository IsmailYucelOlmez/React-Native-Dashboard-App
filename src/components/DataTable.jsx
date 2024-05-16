import React, { Fragment, useState } from 'react'
import { Pressable, View } from 'react-native'
import { Text,ScrollView } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import OrderDetails from './OrderDetails';
import { AntDesign } from '@expo/vector-icons';


const DataTable = ({data,columns,state,datatype}) => {

  const [selectedId,setSelectedId]=useState("");

  return (
    <ScrollView className="rounded-lg py-3 px-1  mt-5 border flex flex-col bg-white w-full" >
      { data ?(
      <Fragment className="w-full">
        <View className="flex flex-row justify-between items-center m-1 p-1.5 border-b-2 mb-3 pb-3 rounded-lg ">
          
          {columns?.map((e,i)=>(
           <Text className="text-sm">{e.name}</Text> 
          ))}
                
        </View>
        <View className="m-0.5 p-0.5 rounded-lg  flex flex-col gap-2 w-full">
          {data?.map((e,i)=>(
            <View key={i} className=" p-0.5 border-b rounded-lg flex flex-row items-center gap-2 w-full">
              {datatype=="customer" && (
                <Fragment>
                  
                  <Text className="text-xs w-14 px-2 text-center">{e.cName}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.cmail}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.cPhone}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.cBudget}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.cStatu}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.cLocation}</Text>
                </Fragment>
              )}

              {datatype=="employee" && (
                <Fragment >
                  <Text className="text-xs w-14 px-2 text-center">{e.ename}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.ephone}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.hireDate}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.estatu}</Text>
                  <Text className="text-xs w-14 px-2 text-center">{e.job}</Text>
                  
                  <Text className="text-sm w-14 px-2 text-center">{e.elocation}</Text>
                </Fragment>
              )}

              {datatype=="product" && (
                <Fragment >
                  <Text className="text-xs w-full">{e.id}</Text>
                  <Text className="text-xs w-full">{e.pName}</Text>
                  <Text className="text-xs w-full">{e.unitPrice}</Text>
                  <Text className="text-xs w-full">{e.stockAmount}</Text>
                  <Text className="text-xs w-full">{e.pBrand}</Text>
                  
                </Fragment>
              )}

              {datatype=="order" && (
                <Fragment >
                  
                  <Text className="text-xs  w-full text-center">{e.orderDate}</Text>
                  <Text className="text-xs  w-full text-center">{e.orderStatu}</Text>
                  <Text className="text-xs  w-full text-center">{e.totalPrice}</Text>
                  <Text className="text-xs  w-full text-center">{e.customerId}</Text>
                  
                  <Pressable onPress={()=>setSelectedId(e.id)}><AntDesign name="downcircle" size={16} color="black" className=""/></Pressable>
                  
                  
                </Fragment>
              )}
                
                
              {state=="admin" && (
                <View className="flex flex-row w-1/4">
                  <FontAwesome6 name="pencil" size={24} color="black" />
                  <MaterialIcons name="delete" size={24} color="black" />
                </View>         
              )}
                
                
               
            </View>
          ))}

        </View>

      </Fragment>
      ):(
        <View>
          <Text>yükleniyor...</Text>
        </View>
      )}

      {selectedId && (

        <OrderDetails id={selectedId} />
      )}

    </ScrollView>
  )
}

export default DataTable
