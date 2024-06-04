import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice=createApi({
    reducerPath:'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:'https://localhost:7296/api/'}),
    endpoints:(builder)=>({
        
        getCustomers: builder.query({ query: () => 'Customers' }),
        getCustomerById: builder.query({ query: (id) => `Customers/${id}` }),
        getEmployees: builder.query({ query: () => `Emplyoees` }),
        getEmployeesById: builder.query({ query: (id) => `Emplyoees/${id}` }),
        getMessages: builder.query({ query: () => `Messages` }),
        getMessagesByReceiverId: builder.query({ query: (id) =>`Messages?ReceiverId=${id}`}),
        getOrderItems: builder.query({ query: () => `OrderItems` }),
        getOrderItemsByOrderId: builder.query({ query: ({id}) => `OrderItems?OrderId=${id}`}),
        getOrders: builder.query({ query: () => `Orders` }),
        getProducts: builder.query({ query: () => `Products` }),
        getProductsById: builder.query({ query: (id) => `Products/${id}` }),
        getTasks: builder.query({ query: () => `Tasks` }),
        getTasksByAssignedId: builder.query({ query: (id) =>`Tasks?AssignedUserId=${id}`}),
        getUsers: builder.query({ query: () => 'Users' }),
        getUserById: builder.query({ query: (id) =>`Users/${id}`}),
    })
})

export const {useGetCustomersQuery,useGetCustomerByIdQuery,useGetEmployeesQuery,useGetEmployeesByIdQuery,useGetMessagesQuery,useGetMessagesByReceiverIdQuery,useGetOrderItemsQuery,useGetOrderItemsByOrderIdQuery,useGetOrdersQuery,useGetProductsQuery,useGetProductsByIdQuery,useGetTasksQuery,useGetTasksByAssignedIdQuery,useGetUsersQuery,useGetUserByIdQuery}=apiSlice