export interface ICustomer {
    id: number;
    name: string;
    email: string;
}

export interface ICustomers {
    customers: ICustomer[];
    isLoading: boolean;
    error: string;
}