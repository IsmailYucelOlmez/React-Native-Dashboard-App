import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice=createApi({
    reducerPath:'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:'https://localhost:7296/api/'}),
    endpoints:(builder)=>({
        
        getCustomers: builder.query({ query: () => 'Customers' }),
        getEmployees: builder.query({ query: () => `Emplyoees` }),
        getMessages: builder.query({ query: () => `Messages` }),
        getOrderItems: builder.query({ query: () => `OrderItems` }),
        getOrderItemsByOrderId: builder.query({ query: ({id}) => `OrderItems?OrderId=${id}`}),
        getOrders: builder.query({ query: () => `Orders` }),
        getProducts: builder.query({ query: () => `Products` }),
        getTasks: builder.query({ query: () => `Tasks` }),
    })
})

export const {useGetCustomersQuery,useGetEmployeesQuery,useGetMessagesQuery,useGetOrderItemsQuery,useGetOrderItemsByOrderIdQuery,useGetOrdersQuery,useGetProductsQuery,useGetTasksQuery}=apiSlice