
import chartReducer from './chart/chartSlice';
import walletReducer from './wallet/walletSlice';
import userReducer from './user/userSlice';
import transactionReducer from './transaction/transactionSlice';
import categoryReducer from './category/categorySlice';

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        user: userReducer,
        chartData: chartReducer,
        wallets: walletReducer,
        transactions: transactionReducer,
        category: categoryReducer
    }
})
export default store