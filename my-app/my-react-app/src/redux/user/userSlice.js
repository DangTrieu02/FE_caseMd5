/* eslint-disable no-undef */
import {createSlice} from "@reduxjs/toolkit";
import {googleLogin, login, logout, register} from "../../services/userService";



const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    currentRegister: {
        username:'',
        password:'',
        image:'',
        job:''
    }
}
const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.currentRegister = action.payload;
        })
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            if(action.payload !== undefined){
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        })
    }
})

export default useSlice.reducer;