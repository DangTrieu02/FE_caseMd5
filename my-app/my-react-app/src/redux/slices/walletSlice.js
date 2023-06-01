import { createSlice } from "@reduxjs/toolkit";
import { getAllWallet,getOneWallet,updateWallet,removeWallet,addWallet } from "../../services/walletService";

const initialState={
    list:[],
    chart:{},
    currentWallet:{}

}
const walletSlice= createSlice({
    name: 'wallets',
    initialState,
    extraReducers:builder =>{
        builder.addCase(getAllWallet.fulfilled,(state, action)=>{
            state.list = action.payload;  
        })
        builder.addCase(getOneWallet.fulfilled,(state, action)=>{
            state.currentWallet = action.payload
        })
        // builder.addCase(updateWallet.fulfilled,(state, action)=>{

        //     state.list.push(action.payload);
        // })
        // builder.addCase(removeWallet.fulfilled,(state, action)=>{
        //     let index = state.list.findIndex((element)=> {
        //         return element.id === action.payload;
        //       });
        //     state.list.splice(index);
        // })
        builder.addCase(addWallet.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
    }
})
export default walletSlice.reducer;