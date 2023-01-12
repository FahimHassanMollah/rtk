// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => 'posts',
            method: 'GET'
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
            method: 'GET'
        })

    })
});

export const { useGetAllPostQuery,useLazyGetPostByIdQuery } = postApi;