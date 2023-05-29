import {createSlice} from "@reduxjs/toolkit";
import {getWalletIncomeExpense, getWallets} from "../../services/walletService";

const initialState = {
    list: [],
    chart:{},
}

const walletSlice = createSlice(
    {
        name: 'wallet',
        initialState,
        reducers: {},
        extraReducers: builder =>{
            builder.addCase(getWallets.fulfilled, (currentState, action)=>{
                currentState.list = action.payload;
            })
            builder.addCase(getWalletIncomeExpense.fulfilled, (currentState, action)=>{
                currentState.chart = action.payload;
            })

        }
    }
)

export default walletSlice.reducer