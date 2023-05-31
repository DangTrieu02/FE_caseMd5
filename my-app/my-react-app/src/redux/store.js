import { configureStore } from "@reduxjs/toolkit";
import chartReducer from './chart/chartSlice';
import walletReducer from '/wallet/walletSlice';


const store = configureStore({
    reducer:{
        chartData: chartReducer,
        wallets: walletReducer
    }
})
export default store

