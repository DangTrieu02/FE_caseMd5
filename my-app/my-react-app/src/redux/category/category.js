import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory,getOneCategory,addCategory,updateCategory, removeCategory } from "../../services/categoryService";

const initialState={
    list:[]
}
const categorySlice = createSlice({
    name: 'students',
    initialState,
    extraReducers:builder =>{
        builder.addCase(getAllCategory.fulfilled,(state, action)=>{
            state.list = action.payload;
        })
        builder.addCase(getOneCategory.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
        builder.addCase(addCategory.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
        builder.addCase(removeCategory.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
        builder.addCase(updateCategory.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
    }
})

export default categorySlice.reducer