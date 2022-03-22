import styled from 'styled-components';
import { Button} from 'antd';
import { IEmployee } from '../../../../api/dto/IEmployess';
import { EmployeesSlice } from '../../EmployeesSlice';
import { useAppDispatch } from '../../../../store/hooks/redux';

interface IProps {
    employee: IEmployee
}



const EmployeesItem = ({employee}: IProps) => {

    const {deleteEmployess} = EmployeesSlice.actions
    const dispatch = useAppDispatch()

    return (
        <Wrapper>
            <div>
                <h1>ФИО: {employee.surname} {employee.name} {employee.patronymic}</h1>
                <p>Должность: {employee.position}</p>
                <p>Email: {employee.email}</p>
                {employee.telephone && 
                    <p>Телефон: {employee.telephone}</p>
                }
            </div>
            <div>
                <Button onClick={() => dispatch(deleteEmployess(employee.id))}>Удалить</Button>
            </div>
        </Wrapper>
    )
}

export default EmployeesItem

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #1890FF;
    padding: 10px;
    margin-bottom: 15px;
    h1, p {
        margin: 0;
    }
    button {
        position: inherit;
    }
`