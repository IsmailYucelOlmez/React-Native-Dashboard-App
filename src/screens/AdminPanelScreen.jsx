import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { changeId, changeName, changeRole } from '../redux/slices/userSlice'
import { useGetCustomersQuery, useGetProductsQuery, useGetUserByIdQuery } from '../redux/slices/apiSlice'
import { View, ScrollView,Pressable,Text } from 'react-native'
import UserForm from '../components/forms/UserForm';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import CustomerForm from '../components/forms/CustomerForm'
import EmployeeForm from '../components/forms/EmployeeForm'
import ProductForm from '../components/forms/ProductForm'
import MessageForm from '../components/forms/MessageForm'
import TaskForm from '../components/forms/TaskForm'
import CustomerDataTable from '../components/datatables/CustomerDatatable'
import EmployeeDataTable from '../components/datatables/EmployeeDatatable'
import ProductDataTable from '../components/datatables/ProductDatatable'
import UserDataTable from '../components/datatables/UserDatatable'

const AdminPanelScreen = () => {

  const [selectedTab,setSelectedTab]=useState("get");
  const [showPassword,setShowPassword]=useState(false);
  const [dataTableType,setDataTableType]=useState("customer");
  const [formType,setFormType]=useState("customer");
  const [absoluteFormType,setAbsoluteFormType]=useState("");
  const [selectedId,setSelectedId]=useState("");

  const customerData=useGetCustomersQuery();
  
  const productData=useGetProductsQuery();

  const dispatch=useDispatch();
  const {id}=useSelector((state)=>state.user);
  const {name}=useSelector((state)=>state.user)
  const navigation=useNavigation();

  const userData=useGetUserByIdQuery(id);

  const changeTab=()=>{
    if(selectedTab=="get") setSelectedTab("post")
    else setSelectedTab("get")
  }

  const logout=()=>{
      dispatch(changeName(""))
      dispatch(changeId(0))
      dispatch(changeRole(""))
      navigation.navigate("LoginScreen");
  }

  return (
    <SafeAreaView>
     <ScrollView>
      <Navbar/>
      <Sidebar/>

      <View className="mt-3 w-full flex flex-col gap-8">
            <View className="flex flex-row justify-center items-center gap-3">
                <Text className="text-lg font-semibold" >Admin Panel</Text>
                <Pressable onPress={()=>{setAbsoluteFormType("user");setFormType}}>
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

        <View className="my-5 flex flex-row justify-around">
            <Pressable onPress={()=>setAbsoluteFormType("message")} className="flex flex-row gap-3 items-center">
                <FontAwesome6 name="message" size={16} color="black" />
                <Text>Send Message</Text>
            </Pressable>

            <Pressable onPress={()=>setAbsoluteFormType("task")} className="flex flex-row gap-3 items-center">
                <FontAwesome5 name="tasks" size={16} color="black" />
                <Text>Assign Task</Text>
            </Pressable>
        </View>

        <View className="mt-8" >
            <View className="flex flex-row justify-center items-center gap-3 mb-5">
                <Text>Show Data</Text>
                <Pressable onPress={changeTab} className="w-8 h-4 border border-black relative rounded-lg">
                    <View className={`w-4 h-4 absolute rounded-lg bg-slate-600 ${selectedTab=="get" ? 'left-0':'right-0'} `}></View>
                </Pressable>
                <Text>Add Data</Text>
            </View>

            <View>
                {selectedTab=="get"?(

                    <View>
                        <View className="flex flex-row rounded-lg justify-between items-center p-1 border-t-2">
                            <Pressable className={`${dataTableType=="customer" ?'border-b':''} border-black p-1`} onPress={()=>setDataTableType("customer")}><Text className="font-semibold">Customer</Text></Pressable>
                            <Pressable className={`${dataTableType=="user" ?'border-b':''} border-black p-1`} onPress={()=>setDataTableType("user")}><Text className="font-semibold">User</Text></Pressable>
                            <Pressable className={`${dataTableType=="product" ?'border-b':''} border-black p-1`} onPress={()=>setDataTableType("product")}><Text className="font-semibold">Product</Text></Pressable>
                            <Pressable className={`${dataTableType=="employee" ?'border-b':''} border-black p-1`} onPress={()=>setDataTableType("employee")}><Text className="font-semibold">Employee</Text></Pressable>
                        </View>

                        {dataTableType=="customer" && (

                            <CustomerDataTable state={"admin"} setAbsoluteFormType={setAbsoluteFormType} setSelectedId={setSelectedId}/>
                        )}

                        {dataTableType=="employee" && (

                            <EmployeeDataTable state={"admin"} setAbsoluteFormType={setAbsoluteFormType} setSelectedId={setSelectedId}/>
                        )}

                        {dataTableType=="product" && (

                            <ProductDataTable state={"admin"} setAbsoluteFormType={setAbsoluteFormType} setSelectedId={setSelectedId}/>
                        )}

                        {dataTableType=="user" && (

                            <UserDataTable state={"admin"} setAbsoluteFormType={setAbsoluteFormType} setSelectedId={setSelectedId}/>
                        )}
                        
                    </View>
                      
                ):(
                    <View>
                        <View className="flex flex-row rounded-lg justify-between items-center border-t-2 p-1 border-black">
                            <Pressable className={`${formType=="customer" ?'border-b':''} border-black p-1`} onPress={()=>setFormType("customer")}><Text className="font-semibold">Customer</Text></Pressable>
                            <Pressable className={`${formType=="user" ?'border-b':''} border-black p-1`} onPress={()=>setFormType("user")}><Text className="font-semibold">User</Text></Pressable>
                            <Pressable className={`${formType=="product" ?'border-b':''} border-black p-1`} onPress={()=>setFormType("product")}><Text className="font-semibold">Product</Text></Pressable>
                            <Pressable className={`${formType=="employee" ?'border-b':''} border-black p-1`} onPress={()=>setFormType("employee")}><Text className="font-semibold">Employee</Text></Pressable>
                        </View>

                        {formType=="user" && (
                            <UserForm operation={"POST"} id={id} />
                        )}

                        {formType=="customer" && (
                            <CustomerForm operation={"POST"} id={selectedId} />
                        )}

                        {formType=="product" && (
                            <ProductForm operation={"POST"} id={selectedId} />
                        )}

                        {formType=="employee" && (
                            <EmployeeForm operation={"POST"} id={selectedId} />
                        )}
                                        
                    </View>
                    
                )}
            </View>
        </View>

        {absoluteFormType=="user" && (

            <UserForm operation={"PUT"} id={id} setAbsoluteFormType={setAbsoluteFormType}/>     
        )}

        {absoluteFormType=="message" && (

            <MessageForm setAbsoluteFormType={setAbsoluteFormType}/>
        )}

        {absoluteFormType=="task" && (

            <TaskForm  setAbsoluteFormType={setAbsoluteFormType}/>
        )}

        {absoluteFormType=="customer" && (

            <CustomerForm operation={"PUT"} id={selectedId} setAbsoluteFormType={setAbsoluteFormType}/>     
        )}

        {absoluteFormType=="product" && (

            <ProductForm operation={"PUT"} id={selectedId} setAbsoluteFormType={setAbsoluteFormType}/>     
        )}

        {absoluteFormType=="employee" && (

            <EmployeeForm operation={"PUT"} id={selectedId} setAbsoluteFormType={setAbsoluteFormType}/>     
        )}


     </ScrollView>
    </SafeAreaView>
  )
}

export default AdminPanelScreen
