import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { StackedBarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

const StackedBarChartScreen = () => {

  const {themeColor}=useSelector((state)=>state.settings)

    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
          [60, 60, 60],
          [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
      };

  return (
    <SafeAreaView>
        <Sidebar/>
        <Navbar/>

        <StackedBarChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: {themeColor},
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          className="mt-6"
        />

      
    </SafeAreaView>
  )
}

export default StackedBarChartScreen
