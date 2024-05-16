import React, {View, useEffect} from 'react'
import { useGetOrderItemsByOrderIdQuery } from '../redux/slices/apiSlice'

const OrderDetails = ({id}) => {

  var detailsData;

  useEffect(()=>{

    detailsData=useGetOrderItemsByOrderIdQuery(id);
    console.log(detailsData)

  },[id])

  return (
    <View>
        <Text>detail component</Text>
      {detailsData.status="pending" ? (
        <Text>Loading</Text>
      ):(
        <View>
            {detailsData?.data.map((e,i)=>(
              <View key={i} className=" p-0.5 border-b rounded-lg flex flex-row items-center gap-2 ">
                <Text className="text-sm ">{e.id}</Text>
                <Text className="text-sm ">{e.cName}</Text>
                <Text className="text-sm ">{e.cmail}</Text>
                <Text className="text-sm ">{e.cPhone}</Text>
                <Text className="text-sm ">{e.cBudget}</Text>
                <Text className="text-sm ">{e.cStatu}</Text>
                <Text className="text-sm ">{e.cLocation}</Text>          
              </View>
            ))}
        </View>
      )}
    </View>
  )
}

export default OrderDetails
