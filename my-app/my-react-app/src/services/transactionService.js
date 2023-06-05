/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import customAPI from "./customAPI";
import axios from "axios";

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
    async (data) => {
        let newTrans= await customAPI().post(`transaction/${data.id}`,data.values)// id ví
        let cate= await axios.get(`http://localhost:3001/category/one?id=${data.values.category}`) 
        newTrans.data.category = cate.data
        return  newTrans.data ;
    }
)

export const updateOneTransaction = createAsyncThunk(
    'transactions/updateOneTransaction',
    async (data) => {
        console.log(data)
        await customAPI().put(`transaction/${data.id}`,data.values)  // id transaction
        let cate= await axios.get(`http://localhost:3001/category/one?id=${data.values.category}`)
        data.values.category = cate.data
        return { id: data.id, newTransaction: data.values }
    }
)

export const deleteOneTransaction = createAsyncThunk(
    'transactions/deleteOneTransaction',
    async (id) => {
        await customAPI().delete(`transaction/${id}`) // id transaction
        return id;
    }
)

















