import { Layout, Breadcrumb, Button } from 'antd';
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from '../../../store/hooks/redux';
import { UsersSlice } from '../../../modules/users/UsersSlice';
import { useAppDispatch } from './../../../store/hooks/redux';

const { Header } = Layout;



const HeaderMenu = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.users.authUser)
    console.log(user)
    const {userOut} = UsersSlice.actions

    const location = useLocation();
    const nameLocation = location.pathname.split('/')
    let namePage
    if (nameLocation.length === 4) {
        namePage = nameLocation[3]
    } else {
        namePage = nameLocation[2]
    }

    const logOut = () => {
        dispatch(userOut())
        navigate('/')
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
            <Wrapper>
                <h1 style={{ margin: 0, paddingLeft: 22, fontSize: 20}}>{namePage[0].toUpperCase() + namePage?.slice(1)}</h1>
                <Info>
                    <p>{user.surname} {user.name}</p>
                    
                    <Button onClick={logOut}>Выйти</Button>
                </Info>
                
            </Wrapper>
        </Header> 
    )
}

export default HeaderMenu


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    button {
        margin-bottom: 16px;
        margin-left: 10px;
    }
`