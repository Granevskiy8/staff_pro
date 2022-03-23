import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CustomersSlice } from "../modules/customers/CustomersSlice";
import { EmployeesSlice } from "../modules/employess/EmployeesSlice";
import { UsersSlice } from "../modules/users/UsersSlice";
import { PostsSlice } from './../modules/posts/PostsSlice';

const rootReducer = combineReducers({
    users: UsersSlice.reducer,
    employess: EmployeesSlice.reducer,
    customers: CustomersSlice.reducer,
    posts: PostsSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
