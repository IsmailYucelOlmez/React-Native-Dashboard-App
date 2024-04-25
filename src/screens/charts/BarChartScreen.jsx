import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

const BarChartScreen = () => {

  const {themeColor}=useSelector((state)=>state.settings)

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      };

  return (
    <SafeAreaView>
        <Sidebar/>
        <Navbar/>

        <BarChart
          data={barData}
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

          className="mt-6"
/>

      
    </SafeAreaView>
  )
}

export default BarChartScreen
