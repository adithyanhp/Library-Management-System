import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        message: null,
        user: null
    }
})
