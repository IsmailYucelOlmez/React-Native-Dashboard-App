import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-chart-kit'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

const LineChartScreen = () => {

  const {themeColor}=useSelector((state)=>state.settings)

    const line = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2, // optional
          },
        ],
      };

  return (
    <SafeAreaView>
      <Navbar />
       <Sidebar/>

      <LineChart
    data={line}
    width={Dimensions.get('window').width} 
    height={220}
    yAxisLabel={'$'}
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
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      
    </SafeAreaView>
  )
}

export default LineChartScreen