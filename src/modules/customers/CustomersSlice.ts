import { fetchCustomers } from './CustomersThunk';
import { createSlice } from '@reduxjs/toolkit';
import { ICustomers } from "../../api/dto/ICustomers";


const initialState: ICustomers = {
    customers: [],
    isLoading: false,
    error: ''
}

export const CustomersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCustomers.fulfilled.type]: (state, action) => {
            state.customers = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchCustomers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCustomers.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})