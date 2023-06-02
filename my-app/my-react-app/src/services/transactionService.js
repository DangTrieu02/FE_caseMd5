/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getAllTransaction = createAsyncThunk(
    'transactions/getAllTransaction',
    async (id) => {
        try {
            let res = await customAPI().get(`/transaction/${id}`)// id ví
            return res.data;
        } catch (e) {
            console.log(e.message); 
        }

    }
)

export const getOneTransaction = createAsyncThunk(
    'transactions/getOneTransaction',
    async (id) => {
        let res = await customAPI().get(`transaction/one/${id}`) //id transaction
        return res.data;
    }
)

export const addTransaction = createAsyncThunk(
    'transactions/addTransaction',
    async (id) => {
        let res = await customAPI().post(`wallet/transactions/${id}`)// id ví
        return res.data;
    }
)

export const updateOneTransaction = createAsyncThunk(
    'transactions/updateOneTransaction',
    async (id, newTransaction) => {
        let res = await customAPI().put(`wallet/transactions/${id}`)  // id transaction
        return { id: id, newTransaction: newTransaction }
    }
)

export const deleteOneTransaction = createAsyncThunk(
    'transactions/deleteOneTransaction',
    async (id) => {
        let res = await customAPI.delete(`wallet/transactions/${id}`) // id transaction
        return id;
    }
)

















