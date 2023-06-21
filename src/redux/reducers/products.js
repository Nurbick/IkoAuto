import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const productSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl:`http://localhost:8080/`}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => `products`
        })
    })
});

export const {useGetProductsQuery} = productSlice;