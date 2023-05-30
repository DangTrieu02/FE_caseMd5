import {createSlice} from "@reduxjs/toolkit";
import {
    addTransaction,
    deleteOneTransaction,
    getAllTransaction,
    getOneTransaction,
    updateOneTransaction
} from "../../services/transactionService";


const initialState = {
    list: [],
    currentTransaction: {}
}

const transactionSlice = createSlice(
    {
        name: 'transactions',
        initialState,
        reducers: {},
        extraReducers: builder =>{
            builder.addCase(getAllTransaction.fulfilled,(state, action)=>{
                state.list = action.payload;
            })
            builder.addCase(getOneTransaction.fulfilled,(state, action)=>{
                state.currentTransaction = action.payload;
            })
            builder.addCase(updateOneTransaction.fulfilled,(state, action)=>{
                let transaction = action.payload.newTransaction;
                let id = action.payload.id;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }
                state.list[index] = transaction;
            })
            builder.addCase(deleteOneTransaction.fulfilled,(state, action)=>{
                let id = action.payload;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }
                state.list.splice(index,1)
            })
            builder.addCase(addTransaction.fulfilled,(state, action)=>{
                state.list.push(action.payload);
            })
        }
    }
)

export default transactionSlice.reducer