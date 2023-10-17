import { configureStore } from "@reduxjs/toolkit";
import DataSlice from './../slice/allDataSlice';
import cartSlice from './../slice/selectedDataSlice';

const store = configureStore({
    reducer : {
        Data : DataSlice,
        Cart : cartSlice
    }
})

export default store;