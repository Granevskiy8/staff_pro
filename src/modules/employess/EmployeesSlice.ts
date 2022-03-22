import { IEmployees } from "../../api/dto/IEmployess"
import { createSlice } from "@reduxjs/toolkit";



const initialState: IEmployees = {
    employees: [
        {email: 'test@mail.ru', surname: 'Иванов', name: 'Иван', patronymic: 'Петрович', position: 'Разработчик', day: 8, month: 'Март', year: '1990', gender: 'Мужской', id: 1}
    ],
}

export const EmployeesSlice = createSlice({
    name: 'employess',
    initialState,
    reducers: {
        addNewEmployess(state, action) {
            state.employees.push(action.payload)
        },
        deleteEmployess(state, action){
            state.employees = state.employees.filter(e => e.id !== action.payload)
        }
        
    }
})