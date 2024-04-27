import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { PieChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

const PieChartScreen = () => {

  const {themeColor}=useSelector((state)=>state.settings)

    const pieData = [
        {
          name: 'Seoul',
          population: 21500000,
          color: 'rgba(131, 167, 234, 1)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Toronto',
          population: 2800000,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Beijing',
          population: 527612,
          color: 'red',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'New York',
          population: 8538000,
          color: '#ffffff',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Moscow',
          population: 11920000,
          color: 'rgb(0, 0, 255)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      ];
  

  return (
    <SafeAreaView>
         <Navbar />
       <Sidebar/>
<View className="mt-6" >
        <PieChart
          data={pieData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: {themeColor},
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
            borderRadius: 16
            }
          }}
          accessor="population"
          backgroundColor="#e5e5e5"
          paddingLeft="10"
          absolute
          
    />
      </View>
    </SafeAreaView>
  )
}

export default PieChartScreen
