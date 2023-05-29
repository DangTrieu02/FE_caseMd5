import customAPI from "./customAPI";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getWallets = createAsyncThunk(
    'wallets/getWallets',
    async () =>{
        let response = await customAPI.get('wallet');
        console.log(response.data)
        return response.data
    }
)

export const getWalletIncomeExpense = createAsyncThunk(
    'wallet/getWalletIncomeExpense',
    async (id) =>{
        let response = await customAPI.get(`/income-expenditure-comparison/${id}`);
        return response.data
    }
)




