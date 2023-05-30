
import chartReducer from './slices/chart/chartSlice';
import walletReducer from './slices/walletSlice';
import chartReducer from './chart/chartSlice';
import walletReducer from '/wallet/walletSlice';

const store = configureStore({
    reducer:{
        chartData: chartReducer,
        wallets: walletReducer
    }
})
export default store