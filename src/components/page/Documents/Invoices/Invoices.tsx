import { IEmployee } from "../../../../api/dto/IEmployess"
import { useAppSelector } from "../../../../store/hooks/redux"
import EmployeesItem from "../../../../modules/employess/components/PostItem/EmployeesItem";
import { Button, Tabs } from 'antd';
import AddNewInvoicers from "../AddNewInvoicers/AddNewInvoicers";
import { useState } from "react";

const { TabPane } = Tabs;


const Invoices = () => {
    

    const [drover, setDrover] = useState(false)
    const droverDisplay = () => {
        setDrover(!drover)
    }
    const employees = useAppSelector(state => state.employess.employees)
    const operations = <Button type="primary" onClick={droverDisplay}>+ Add new invoices</Button>;
  
    let razrab = employees.filter(item => item.position === 'Разработчик');
    let tester = employees.filter(item => item.position === 'Тестировщик');
    let manager = employees.filter(item => item.position === 'Менеджер');

    return (
        <>
        <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
            <TabPane tab="All" key="1">
            {employees.length === 0 && <p>Нет приглашенных сотрудников</p>} 
            {employees.map((employee: IEmployee) => (
                <EmployeesItem key={employee.id} employee={employee}/>
            ))}
            </TabPane>
            <TabPane tab="Разработчики" key="2">
            {razrab.length === 0 && <p>Нет приглашенных разработчиков</p>} 
            {razrab.map((employee: IEmployee) => (
                <EmployeesItem key={employee.id} employee={employee}/>
            ))}
            </TabPane>
            <TabPane tab="Тестировщики" key="3">
            {tester.length === 0 && <p>Нет приглашенных тестировщиков</p>} 
            {tester.map((employee: IEmployee) => (
                <EmployeesItem key={employee.id} employee={employee}/>
            ))}
            </TabPane>
            <TabPane tab="Менеджеры" key="4">
            {manager.length === 0 && <p>Нет приглашенных менеджеров</p>} 
            {manager.map((employee: IEmployee) => (
                <EmployeesItem key={employee.id} employee={employee}/>
            ))}
            </TabPane>
        </Tabs>
        {drover && <AddNewInvoicers droverDisplay={droverDisplay} />}
        </>
    )
}

export default Invoices


