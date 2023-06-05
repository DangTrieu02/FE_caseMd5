import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory,getOneCategory,addCategory,updateCategory, removeCategory } from "../../services/categoryService";

const initialState={
    list:[],
    currentCategory:{}
}
const categorySlice = createSlice({
    name: 'students',
    initialState,
    extraReducers:builder =>{
        builder.addCase(getAllCategory.fulfilled,(state, action)=>{
            state.list = action.payload;
        })
        builder.addCase(getOneCategory.fulfilled,(state, action)=>{
            state.currentCategory = action.payload;
        })
        builder.addCase(addCategory.fulfilled,(state, action)=>{
            state.list.push(action.payload);
        })
        builder.addCase(removeCategory.fulfilled,(state, action)=>{
            let id = action.payload;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }
                state.list.splice(index,1)
        })
        builder.addCase(updateCategory.fulfilled,(state, action)=>{
            let newCategory = action.payload.values;
                let id = action.payload.id;
                let index = -1;
                for (let i = 0; i < state.list.length; i++) {
                    if(state.list[i].id === id){
                        index = i;
                    }
                }
                state.list[index] = newCategory;
        })
    }
})

export default categorySlice.reducer