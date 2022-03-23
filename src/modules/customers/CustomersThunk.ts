import { createAsyncThunk} from '@reduxjs/toolkit'
import { customersApi } from '../../api/customers/customersRequest'

export const fetchCustomers = createAsyncThunk(
    'customers/fetchAll',
    async (_, thunkAPI) => {
        const response = await customersApi.getCustomers()
        return response
    }
)

