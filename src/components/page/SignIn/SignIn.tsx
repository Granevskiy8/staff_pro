import styled from 'styled-components';
import {useState} from 'react';
import { Button, Input, Checkbox, Form, Alert} from 'antd';
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from '../../../store/hooks/redux';
import { useAppDispatch } from './../../../store/hooks/redux';
import { UsersSlice } from '../../../modules/users/UsersSlice';
import { useTranslation } from "react-i18next";
import {GlobalOutlined} from '@ant-design/icons'

const SignIn = () => {
    const { t, i18n } = useTranslation();
    const [len, setLen] = useState('русский')
    const changeLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ru');
            setLen('english')
        }
        else {
            i18n.changeLanguage('en')
            setLen('русский')
        }
      };
    const dispatch = useAppDispatch();
    const {authUser} = UsersSlice.actions
    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setError(false)
    };
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const alert = <Alert
    description={t('signIn.alertText')}
    type="error"
    closable
    onClose={onClose}
  />
    const users = useAppSelector(state => state.users.users)

    const onFinish = (values: any) => {
        const email = values.email;
        const password = values.password;
        console.log('Received values of form: ', email, password);
        if (users.some(e => e.email === email && e.password === password)) {
            dispatch(authUser(email))
            navigate('home/documents/invoices')
        } else {
            form.resetFields();
            setError(true)
        }
    };


    return (
        <>
        <Locales>
            <div style={{ paddingRight: 10, marginTop: -10 }}>
                <GlobalOutlined />
            </div>
            <div>
                <p>{t('signIn.lengText')} <Button onClick={changeLanguage} style={{padding: 0}} type="link">{len}?</Button></p>
            </div>
        </Locales>
        <Wrapper>
            <LeftBox>
                <Title>
                    <p>Staff Pro</p>
                    <h1>HR {t('signIn.leftTitle1')} <br/> {t('signIn.leftTitle2')} <br/> {t('signIn.leftTitle3')}</h1>
                </Title>
                <Image>
                    <img src='/assets/img/Vector.png' alt='SignInLogo'/>
                </Image>
            </LeftBox>
            <RightBox>
                <Register>
                    <p>{t('signIn.signUpTtile')} <NavLink to='sign_up'><Button type="link">{t('signIn.signUp')}</Button></NavLink></p>
                </Register>
                <AlertMes>
                    {error && alert}
                </AlertMes>
                <SignInForm>
                    <h1>{t('signIn.formTitle')} Staff Pro</h1>
                    <Form layout="vertical" onFinish={onFinish} form={form} >
                        <Form.Item required={false} name='email' label={t('signIn.emailLabel')} rules={[{ required: true, message: t('signIn.emailMes'), type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item required={false} name='password' label={t('signIn.pasLabel')} rules={[{ required: true, message: t('signIn.pasMes') }]}>
                            <Input />
                        </Form.Item>
                        <CheckRow>
                            <Form.Item>
                                <Checkbox>{t('signIn.checkboxTitle')}</Checkbox>
                            </Form.Item>
                            <NavLink to='change_password'><Button type="link">{t('signIn.pasLink')}</Button></NavLink>
                        </CheckRow>
                        <Form.Item>
                            <Button type='primary' htmlType="submit">{t('signIn.button')}</Button>
                        </Form.Item>
                    </Form>
                </SignInForm>
            </RightBox>

        </Wrapper>
        </>
    )
}

export default SignIn

const Locales = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`
const LeftBox = styled.div`
    width: 35%;
    background: #1890FF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    @media (max-width: 955px) {
           display: none;
        }
`
const Title = styled.div`
    padding-left: 40px;
    p {
        font-size: 20px;
        line-height: 28px;
        padding-top: 40px;
        margin: 0;
    }
    h1 {
        font-size: 38px;
        line-height: 36px;
        padding-top: 20px;
        margin: 0;
        color: white;

    }

`
const Image = styled.div`
    padding: 0px 40px 40px 40px;
    img {
        @media (max-width: 1365px) {
           width: 95%;
        }
    }
`
const RightBox = styled.div`
    width: 65%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 955px) {
           width: 100%;
        }
`
const Register = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 24px 20px 0px;
    width: 100%;
    button {
        padding: 0;
    }
`
const AlertMes = styled.div`
    position: fixed;
    right: 10px;
    top: 70px;
`
const SignInForm = styled.div`
    display: flex;
    width: 415px;
    flex-direction: column;
    padding-top: 185px;
    h2 {
        color: #262626;
        font-size: 30px;
        line-height: 38px;
    }
    input {
        height: 40px;
    }
`
const CheckRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    p {
        margin: 0;
        font-size: 14px;
        line-height: 22px;
    }
`


