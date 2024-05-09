import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice=createApi({
    reducerPath:'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:'https://localhost:7296/api/'}),
    endpoints:(builder)=>({

        getCustomers: builder.query({ query: () => 'Customers' }),
        getEmployees: builder.query({ query: () => `Employees` }),
        getMessages: builder.query({ query: () => `Messages` }),
        getOrderItems: builder.query({ query: () => `OrderItems` }),
        getOrders: builder.query({ query: () => `Orders` }),
        getProducts: builder.query({ query: () => `Products` }),
        getTasks: builder.query({ query: () => `Tasks` }),
    })
})

export const {useGetCustomersQuery,useGetEmployeesQuery,useGetMessagesQuery,useGetOrderItemsQuery,useGetOrdersQuery,useGetProductsQuery,useGetTasksQuery}=apiSlice