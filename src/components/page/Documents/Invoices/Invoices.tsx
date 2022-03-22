import { IEmployee } from "../../../../api/dto/IEmployess"
import { useAppSelector } from "../../../../store/hooks/redux"

import EmployeesItem from "../../../../modules/employess/components/PostItem/EmployeesItem";




const Invoices = () => {

    const employees = useAppSelector(state => state.employess.employees)
   
    console.log(employees)
  


    return (
        <>
            {employees.map((employee: IEmployee) => (
                <EmployeesItem key={employee.id} employee={employee}/>
            ))}
        </>
    )
}

export default Invoices


