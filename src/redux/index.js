import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./reducers/products";

const store = configureStore({
    reducer: {
        [productSlice.reducerPath] : productSlice.reducer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        })
            .concat(productSlice.middleware)
});

export default store