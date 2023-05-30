import {createSlice} from "@reduxjs/toolkit";
import {getMonthlyIncomeExpense, getTotalIncomeExpense, getWalletsIncomeExpense} from "../../services/chartService";
const initialState = {
    totalIncomeExpense: {},
    monthlyIncomeExpense: [],
    walletsIncomeExpense: []
}

const chartSlice = createSlice(
    {
        name: 'chartData',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getTotalIncomeExpense.fulfilled, (currentState, action)=>{
                console.log(action.payload)
                currentState.totalIncomeExpense = action.payload
            })
            builder.addCase(getMonthlyIncomeExpense.fulfilled, (currentState, action)=>{
                console.log(action.payload)
                currentState.monthlyIncomeExpense = action.payload
            })
            builder.addCase(getWalletsIncomeExpense.fulfilled, (currentState, action)=>{
                console.log(action.payload)
                currentState.walletsIncomeExpense = action.payload
            })
        }
    }
)
export default chartSlice.reducer




