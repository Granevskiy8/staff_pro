import { Menu, Layout} from 'antd';
import {
    PieChartOutlined,
    RiseOutlined,
    FileDoneOutlined,
    UserOutlined,
    SettingOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;


const LeftMenu = () => {

    
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme='light'
        style={{ top: -35}}
        >
            <Menu
                style={{ width: 200, paddingTop: 85, height: '100vh'}}
                defaultSelectedKeys={['3']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                theme='light'
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <NavLink to='dashboard'>Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<RiseOutlined />}>
                    <NavLink to='reports'>Reports</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<FileDoneOutlined />} title="Documents">
                    <Menu.Item key="3">
                        <NavLink to='documents/invoices'>Invoices</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to='documents/drafts'>Drafts</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to='documents/templates'>Templates</NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Customers">
                    <Menu.Item key="6">
                        <NavLink to='customers/users'>Users</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="7" icon={<SettingOutlined />}>
                    <NavLink to='settings'>Settings</NavLink>
                </Menu.Item>
                <Menu.Item key="8" icon={<InfoCircleOutlined />}>
                    <NavLink to='helpcontact'>Help & Contact</NavLink>
                </Menu.Item>
                </Menu>
        </Sider>
    )
}

export default LeftMenu