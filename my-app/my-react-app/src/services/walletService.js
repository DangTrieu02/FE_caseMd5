import customAPI from "./customAPI";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAllWallet = createAsyncThunk(
    'wallets/getAllWallet',
    async () => {
        let res= await customAPI.get('home/wallets')
        console.log(res.data)
        return res.data
    }
)
export const getOneWallet = createAsyncThunk(
    'wallets/getOneWallet',
    async (id) => {
        let res= await customAPI.get(`home/wallets/${id}`)
        return res.data
    }
)

export const addWallet = createAsyncThunk(
    'wallets/addWallet',
    async (newWallet) => {
        await customAPI.post(`home`, newWallet);
        return newWallet;
    }
)
export const removeWallet = createAsyncThunk(
    'wallets/removeWallet',
    async (id) => {
        await customAPI.delete(`wallet/${id}`)
        return id;
    }
)

export const updateWallet = createAsyncThunk(
    'wallets/updateWallet',
    async (id,newWallet) => {
        await customAPI.put(`wallet?${id}`, newWallet)
        return {id:id, newWallet:newWallet}
    }
)
export const getWalletIncomeExpense = createAsyncThunk(
    'wallet/getWalletIncomeExpense',
    async (id) =>{
        let response = await customAPI.get(`wallet/income-expenditure-comparison/${id}`);
        return response.data
    }
)



