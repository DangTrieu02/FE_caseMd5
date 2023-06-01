import customAPI from "./customAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllWallet = createAsyncThunk(
    'wallets/getAllWallet',
    async () => {
        try {
            let res = await customAPI().get('/wallet')
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getOneWallet = createAsyncThunk(
    'wallets/getOneWallet',
    async (id) => {
        try {
            let res = await customAPI().get(`/wallet/one?id=${id}`)
            return res.data
        } catch (e) {
            console.log(e)
        }

    }
)

export const addWallet = createAsyncThunk(
    'wallets/addWallet',
    async (newWallet) => {
        await customAPI().post('/wallet', newWallet);
        return newWallet;
    }
)

export const removeWallet = createAsyncThunk(
    'wallets/removeWallet',
    async (id) => {
        await customAPI().delete(`wallet?id=${id}`)
        return id;
    }
)

export const updateWallet = createAsyncThunk(
    'wallets/updateWallet',
    async (data) => {
        await customAPI().put(`wallet?id=${data.id}`, data.values)
        return { id: data.id, newWallet: data.values}
    }
)
export const getWalletIncomeExpense = createAsyncThunk(
    'wallet/getWalletIncomeExpense',
    async (id) => {
        let response = await customAPI().get(`wallet/income-expenditure-comparison/${id}`);
        return response.data
    }
)



