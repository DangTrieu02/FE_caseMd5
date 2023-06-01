import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getTotalIncomeExpense = createAsyncThunk(
    'chart/getTotalIncomeExpense',
    async() =>{
        let response = await customAPI().get('home/income-expenditure-comparison/total')
        console.log(response.data,222);
        return response.data
    })


export const getMonthlyIncomeExpense = createAsyncThunk(
    'chart/getMonthlyIncomeExpense',
    async() =>{
        console.log(1111)
        let response = await customAPI().get('home/income-expenditure-comparison/monthly?year=2023')
        console.log(response.data)
        return response.data
    })


export const getWalletsIncomeExpense = createAsyncThunk(
    'chart/getWalletsIncomeExpense',
    async() =>{
        let response = await customAPI().get('home/income-expenditure-comparison/by-wallet')
        return response.data
    })

