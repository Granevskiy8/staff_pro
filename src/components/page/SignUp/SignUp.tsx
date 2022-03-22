import styled from 'styled-components';
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Input, Button, InputNumber, Select, Checkbox} from 'antd';
import { UsersSlice } from '../../../modules/users/UsersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
const { Option } = Select;


const SignUp = () => {
    const navigate = useNavigate();
    const mounths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const nowDate = new Date();
    let years = [];
    for (let i = 1980; i < nowDate.getFullYear(); i++) {
	    years[i] = i + 1;
    }  
    

    const users = useAppSelector(state => state.users.users)
    const {addNewUser} = UsersSlice.actions
    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        dispatch(addNewUser(values))
        navigate('/home/documents/invoices')
    };

    console.log(users)

    return (
        <Wrapper>
                <Title>StaffPro</Title>
            <Body>
                <Form layout="vertical" size='large' onFinish={onFinish}>
                    <h2>Зарегистрируйтесь</h2>
                    <Form.Item name='email' required={false} rules={[{ required: true, message: 'Введите свой эл. адресс', type: 'email' }]}>
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item name='surname' required={false} rules={[{ required: true, message: 'Введите фамилию' }]}>
                        <Input placeholder="Фамилия"/>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name='name' required={false} rules={[{ required: true, message: 'Введите имя' }]} style={{ display: 'inline-block', width: '50%', margin: '0'}}>
                            <Input placeholder="Имя"/>
                        </Form.Item>
                        <Form.Item name='patronymic' required={false} rules={[{ required: true, message: 'Введите отчество' }]} style={{ display: 'inline-block', width: '50%', paddingLeft: '24px', margin: '0'}}>
                            <Input placeholder="Отчество"/>
                        </Form.Item>
                    </Form.Item>
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
                    <Form.Item label='Дата рождения'>
                        <Form.Item name='day' required={false} rules={[{ required: true, message: 'Введите день' }]} style={{ display: 'inline-block', width: '20%', margin: '0' }}>
                            <InputNumber placeholder='День'/>
                        </Form.Item>
                        <Form.Item name='month' required={false} rules={[{ required: true, message: 'Введите месяц' }]} style={{ display: 'inline-block', width: '40%', margin: '0'}}>
                            <Select placeholder="Месяц">
                                {mounths.map((mounth, index) => (
                                    <Option key={index} value={mounth}>{mounth}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name='year' required={false} rules={[{ required: true, message: 'Введите год' }]} style={{ display: 'inline-block', width: '40%', paddingLeft: '24px', margin: '0'}}>
                            <Select placeholder="Год">
                                {years.map((year, index) => (
                                    <Option key={index} value={year}>{year}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name='tlephone' required={false} style={{ display: 'inline-block', width: '60%', margin: '0', paddingTop: '24px'}}>
                            <Input placeholder='Телефон (опционально)'/>
                        </Form.Item>
                        <Form.Item name='gender' required={false} rules={[{ required: true, message: 'Выберете пол' }]} style={{ display: 'inline-block', width: '40%', paddingLeft: '24px', margin: '0', paddingTop: '24px'}}>
                            <Select placeholder="Пол">
                                <Option value='Мужской'>Мужской</Option>
                                <Option value='Женской'>Женский</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item name='soglas' valuePropName='checked'
                        rules = {[
                            {
                                validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject('Для регистрации необходимо принять условия соглашения')
                            },
                        ]}
                    >
                        <Checkbox>Я согласен с пользовательским соглашением и политикой обработки персональных
данных пользователей</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                        Создать аккаунт
                        </Button>
                    </Form.Item>
                    <p>Уже есть аккаунт в StaffPro? <NavLink to='/'><Button type="link">Войдите</Button></NavLink></p>
                </Form>
            </Body>
        </Wrapper>
    )
}

export default SignUp

const Wrapper = styled.div`
    background: #F0F2F5;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 56px;
    line-height: 64px;
    margin: 0;
    padding-top: 32px;
    padding-bottom: 16px;

`


const Body = styled.div`
    background: white;
    width: 648px;
    form {
        padding: 24px;
    }
    h2 {
        text-align: center;
    }
    p {
        text-align: center;
    }
    @media (max-width: 740px) {
           width: 540px;
        }
`
