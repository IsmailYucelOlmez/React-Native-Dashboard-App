import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userSlice = createApi({
  reducerPath: 'user',
  tagTypes: ["Users","User"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7296/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'Users',
      providesTags: ['Users'], 
    }),
    getUsersById: builder.query({
        query: () => `Users/${id}`,
        providesTags: ['User'], 
      }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'], 
    }),
    updateUser: builder.mutation({
      query: ({ id, updatedUser }) => ({
        url: `Users/${id}`,
        method: 'PUT',
        body: updatedUser,
      }),
       invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `Users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
})
});


export const { getUsers,getUsersById,addUser,updateUser,deleteUser } = userSlice



