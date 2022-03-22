import { IUser, IUsers } from './../../api/dto/IUser';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUsers = {
    users: [
    {email: 'sasha@mail.ru', password: '123456', surname: 'Granevskiy', name: 'Sasha', patronymic: 'Vladimirovich', day: 8, month: 'Март', year: '1998', telephone: 77915168, gender: 'Мужской'},
    ]
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser(state, action: PayloadAction<IUser>) {
            state.users.push(action.payload)
        },
        changePassword(state, action) {
            state.users.some(e => {
                if (e.email === action.payload.checkedEmail) {
                    e.password = action.payload.newPassword
                }
            }) 
                
        }
        
    }
})



