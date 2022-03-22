import styled from 'styled-components';
import { Button, Input, Form, Alert} from 'antd';
import { NavLink, useNavigate} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { useState } from 'react';
import { UsersSlice } from '../../../modules/users/UsersSlice';



const ChangePassword = () => {
    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setError(false)
    };
    const [error, setError] = useState(false)
    const alert = <Alert
    description="Пользователь с таким email не найден"
    type="error"
    closable
    onClose={onClose}
    />

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const {changePassword} = UsersSlice.actions
    const [validEmail, setValidEmail] = useState(false)
    const {users} = useAppSelector(state => state.users)
    const [checkedEmail, setCheckedEmail] = useState('')
    const onFinish = (values: any) => {
        if (users.some(e => e.email === values.email)) {
            setValidEmail(true)
            setCheckedEmail(values.email)
            setError(false)
        } else {
            form.resetFields();
            setError(true)
        }
        if (validEmail) {
            const newPassword = values.password
            dispatch(changePassword({checkedEmail, newPassword}))
            navigate('/')
        }

    };
    const eee = users.map(e => e.email)
    console.log(eee)

    return (
        <Wrapper>
            <AlertMes>
                {error && alert}
            </AlertMes>
            <h1>StaffPro</h1>
            <Form layout="vertical" onFinish={onFinish} form={form} style={{ width: 330, background: 'white', padding: 15, marginTop: 64, borderRadius: 2}}>
                {!validEmail && 
                    <>
                    <h2>Забыли пароль ?</h2>
                    <p>Введите ваш эл. адрес, чтобы восстановить доступ к своему аккаунту</p>
                    <Form.Item required={false} name='email' rules={[{ required: true, message: 'Пожалуйста введите свой эл. адресс', type: 'email' }]}>
                        <Input placeholder='Email'/>
                    </Form.Item>
                    <p style={{ textAlign: 'center' }}>Впервые в StaffPro? <NavLink to='/sign_up'><Button type="link">Зарегистрируйтесь</Button></NavLink></p>
                    </>
                }
                {validEmail && 
                    <>
                    <h2>Введите новый пароль</h2>
                    <Form.Item name='password' required={false} rules={[{ required: true, message: 'Введите пароль' }]}>
                        <Input.Password placeholder="Пароль"/>
                    </Form.Item>
                    <Form.Item name='confirmpassword' required={false} rules={[{ required: true, message: 'Повторите пароль' }, 
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if(!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('Пароли не совпадают')
                            }
                        })
                    ]}>
                        <Input.Password placeholder="Повторите пароль"/>
                    </Form.Item>
                    </>
                }
                <Form.Item>
                        <Button type='primary' htmlType="submit" style={{ width: '100%' }}>Подтвердить</Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )
}

export default ChangePassword;

const Wrapper = styled.div`
    background: #E8E8E8;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    h1 {
        text-align: center;
        margin-top: 134px;
    }
    h2 {
        text-align: center;
    }
    p {
        color: #595959;
    }
`
const AlertMes = styled.div`
    position: fixed;
    right: 10px;
    top: 26px;
`

