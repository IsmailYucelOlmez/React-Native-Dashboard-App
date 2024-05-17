import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import DataTable from '../../components/DataTable'
import { useGetEmployeesQuery } from '../../redux/slices/apiSlice'
import {employeeColumns} from '../../../assets/columns'

const EmployeeScreen = () => {

  const employeeData=useGetEmployeesQuery();

  return (
    <SafeAreaView>
      <Navbar />
       <Sidebar/>
       {employeeData.status=="pending" ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ):(
        <View className="" >
          <Text className="text-xl font-bold ml-2">Employee</Text>
          <DataTable data={employeeData?.data} columns={employeeColumns} state="user" datatype="employee" />
        </View>
      )}
      
    </SafeAreaView>
  )
}

export default EmployeeScreen
