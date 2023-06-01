
import chartReducer from './slices/chart/chartSlice';
import walletReducer from './slices/walletSlice';
import userReducer from './user/userSlice';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        user: userReducer,
        chartData: chartReducer,
        wallets: walletReducer
    }
})
export default store