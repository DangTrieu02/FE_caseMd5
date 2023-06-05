import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategory = createAsyncThunk(
    'category/getAllCategory',
    async () => {
        let res= await axios.get('http://localhost:3001/category/')
        return res.data
    }
);
export const getOneCategory = createAsyncThunk(
    'category/getOneCategory',
    async (id) => {
        let res= await axios.get(`http://localhost:3001/category/one?id=${id}`)
        return res.data
    }
);
export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (newCategory) => {
        await axios.post(`http://localhost:3001/category`,newCategory)
        return newCategory
    }
);
export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (data) => {
        await axios.put(`http://localhost:3001/category?id=${data.id}`,data.values)
        return {id:data.id,values:data.values}
    }
);
export const removeCategory = createAsyncThunk(
    'category/removeCategory',
    async (id) => {
        await axios.delete(`http://localhost:3001/category?id=${id}`)
        return id
    }
);