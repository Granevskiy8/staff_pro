import { Layout, Breadcrumb } from 'antd';

import { useLocation } from "react-router-dom";

const { Header } = Layout;



const HeaderMenu = () => {

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
    </Header> 
    )
}

export default HeaderMenu

