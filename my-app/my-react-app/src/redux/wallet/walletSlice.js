import {createSlice} from "@reduxjs/toolkit";
import {
    addWallet,
    getAllWallet,
    getOneWallet,
    getWalletIncomeExpense,
    removeWallet,
    updateWallet
} from "../../services/walletService";

const initialState = {
    list: [],
    chart:{},
    currentWallet: {}
}

const walletSlice = createSlice({
        name: 'wallets',
        initialState,
        reducers: {},
        extraReducers: builder =>{
            builder.addCase(getAllWallet.fulfilled,(state, action)=>{
                state.list = action.payload;
            })
            builder.addCase(getOneWallet.fulfilled,(state, action)=>{
                state.currentWallet = action.payload;
            })
            builder.addCase(updateWallet.fulfilled,(state, action)=>{
                let newWallet = action.payload.newWallet;
                let id = action.payload.id;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }
                state.list[index] = newWallet;
            })
            builder.addCase(removeWallet.fulfilled,(state, action)=>{
                let id = action.payload;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }       
                state.list.splice(index,1)
            })
            builder.addCase(addWallet.fulfilled,(state, action)=>{
                state.list.push(action.payload);
            })
            builder.addCase(getWalletIncomeExpense.fulfilled, (currentState, action)=>{
                currentState.chart = action.payload;
            })
        }
    }
)

export default walletSlice.reducer