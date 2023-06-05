import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const res = await axios.post('http://localhost:3001/auth/login', user);
        return res.data;  
    })
export const logout = createAsyncThunk(
        'user/logout',
        async () => {
            localStorage.clear()
            return undefined;
    
            
        });
export const register = createAsyncThunk(
            'user/register',
            async (user) => {
                const res = await axios.post('http://localhost:3001/auth/signup', user);
                return res.data;
            })

export const googleLogin = createAsyncThunk(
    'user/googleLogin',
    async () => {
        try{
            const res = await axios.get('http://localhost:3001/auth/login/success', {withCredentials: true})
             console.log(1111,res.data)
             return res.data;
        }catch(e){
                console.log(e)
        }
        
    })