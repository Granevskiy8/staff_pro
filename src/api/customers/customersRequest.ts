import { get } from "../baseRequestAPI"

const ALL_CUSTOMERS = '/users'

export const customersApi = {
    getCustomers: (token?: string) => get(ALL_CUSTOMERS, token)

}