import { Menu, Layout, Breadcrumb, Button } from 'antd';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import AddNewInvoicers from '../../page/Documents/AddNewInvoicers/AddNewInvoicers';
const { Header } = Layout;



const HeaderMenu = () => {

    const [drover, setDrover] = useState(false)

    const droverDisplay = () => {
        setDrover(!drover)
    }
    
    const location = useLocation();
    const nameLocation = location.pathname.split('/')
    let namePage
    if (nameLocation.length === 4) {
        namePage = nameLocation[3]
    } else {
        namePage = nameLocation[2]
    }
    
  
    return (
        <Header style={{ background: 'white', height: 'auto', padding: '0px 50px 0px 0px'}}>
        <Breadcrumb style={{ padding: '11px 0px 0px 22px'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{nameLocation[2][0].toUpperCase() + namePage?.slice(1)}</Breadcrumb.Item>
            { nameLocation.length === 4 &&
                <Breadcrumb.Item>{nameLocation[3][0].toUpperCase() + namePage?.slice(1)}</Breadcrumb.Item>
            }
        </Breadcrumb>
        <h1 style={{ margin: 0, paddingLeft: 22, fontSize: 20}}>{namePage[0].toUpperCase() + namePage?.slice(1)}</h1>
        { nameLocation[3] === 'invoices' && 
        <MenuWrapper>
            <Menu
                mode="horizontal"
                theme='light'
                style={{ width: '100vw'}}
                defaultSelectedKeys={['all']}
            >
                <Menu.Item key="all">
                    All invoices
                </Menu.Item>
                <Menu.Item key="due">
                    Due
                </Menu.Item>
                <Menu.Item key="paid">
                    Paid
                </Menu.Item>
                <Menu.Item key="unpaid">
                    Unpaid
                </Menu.Item>
                <Menu.Item key="archived">
                    Archived
                </Menu.Item>
            </Menu>
            <Button type="primary" onClick={droverDisplay}>+ Add new invoices</Button>
        </MenuWrapper>
    }
        {drover && <AddNewInvoicers droverDisplay={droverDisplay} />}
    </Header> 
    )
}

export default HeaderMenu

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    align-items: center;
`