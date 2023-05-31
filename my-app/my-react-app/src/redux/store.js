import { configureStore } from "@reduxjs/toolkit";
import chartReducer from './slices/chart/chartSlice';
import walletReducer from './slices/walletSlice';


const store = configureStore({
    reducer:{
        chartData: chartReducer,
        wallets: walletReducer
    }
})
export default store