import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-chart-kit'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

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

      <View className="flex justify-center items-center">
        <LineChart
          data={line}
          width={Dimensions.get('window').width-20} 
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: {themeColor},
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#e5e5e5',
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
        </View>
      
    </SafeAreaView>
  )
}

export default LineChartScreen
