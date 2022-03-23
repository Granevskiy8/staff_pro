import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux"
import styled from 'styled-components';
import { useEffect } from "react";
import { fetchCustomers } from "../../../../modules/customers/CustomersThunk";
import { ICustomer } from "../../../../api/dto/ICustomers";

const Users = () => {
    const dispatch = useAppDispatch()
    const {customers, isLoading, error} = useAppSelector(state => state.customers)

    useEffect(() => {
        dispatch(fetchCustomers())
    }, [dispatch])

    
    return (
        <>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
             {customers.map((customer: ICustomer, index) => (
                <Wrapper key={customer.id}>
                    <h1>Name: {customer.name}</h1>
                    <p>Email: {customer.email}</p>
                </Wrapper>
            ))}
        </>
    )
}

export default Users

const Wrapper = styled.div`
    border: 1px solid #1890FF;
    padding: 10px;
    margin-top: 5px;
`