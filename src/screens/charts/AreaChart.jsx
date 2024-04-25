import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { LineChart } from "react-native-gifted-charts";
import { useSelector } from 'react-redux';

const AreaChart = () => {

    const {themeColor}=useSelector((state)=>state.settings)
    const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

  return (
    <SafeAreaView>
      <Sidebar/>
      <Navbar/>

      <LineChart
        areaChart
        data={data}
        startFillColor={themeColor}
        startOpacity={0.8}
        endFillColor="rgb(0, 0, 0)"
        endOpacity={0.3}
        curved
        />

      
    </SafeAreaView>
  )
}

export default AreaChart
