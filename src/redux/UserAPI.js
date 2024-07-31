import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";

export const login = createAsyncThunk(
    'uesr/login', 
    async (data, {rejectWithValue}) => {
        try {
            const response = await AxiosInstance().post('/user/login', data)
            console.log('response: ', response)
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)