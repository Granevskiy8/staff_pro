import { Layout } from 'antd';
import styled from 'styled-components';
import HeaderMenu from '../../ui/HeaderMenu/HeaderMenu';
import LeftMenu from '../../ui/LeftMenu/LeftMenu';
import { Outlet } from "react-router-dom";

const { Content } = Layout;



const Home = () => {
    return (
        <Layout>
            <LeftMenu/>
            <Layout>
                <HeaderMenu/>
                <Content>
                    <Wrapper>
                        <Outlet/>
                    </Wrapper>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Home

const Wrapper = styled.div`
    background: white;
    margin: 24px 24px 24px 24px;
    height: 95%;
    padding: 20px;
    @media (max-width: 990px) {
           margin: 24px;
        }
`

