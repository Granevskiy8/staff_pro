import { ICustomer } from './../../api/dto/ICustomers';
import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCustomers = createAsyncThunk(
    'customers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICustomer[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить данные(')
        }
    }
)

