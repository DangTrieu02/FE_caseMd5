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
    async (id,newCategory) => {
        await axios.put(`http://localhost:3001/category?id=${id}`,newCategory)
        return newCategory
    }
);
export const removeCategory = createAsyncThunk(
    'category/addCategory',
    async (id) => {
        await axios.post(`http://localhost:3001/category?id=${id}`)
        return id
    }
);