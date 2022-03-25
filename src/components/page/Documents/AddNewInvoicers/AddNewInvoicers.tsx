import { Button, Input, Form, Select, InputNumber} from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../store/hooks/redux';
import { EmployeesSlice } from '../../../../modules/employess/EmployeesSlice';

const { Option } = Select;



const AddNewInvoicers = ({droverDisplay}: any) => {
    const mounths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const nowDate = new Date();
    let years = [];
    for (let i = 1980; i < nowDate.getFullYear(); i++) {
	    years[i] = i + 1;
    }  

    const {addNewEmployess} = EmployeesSlice.actions
    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        dispatch(addNewEmployess({...values, id: Date.now()}))
        droverDisplay();
    };

    return (
        <Wrapper>
            <Form layout="vertical" style={{ width: 444, padding: 10, background: 'white', float: 'right', margin: '186px 24px 0px 0px', zIndex: 999999999}} onFinish={onFinish}>
            <h1>Пригласить сотрудника</h1>
            <hr />
                <Form.Item required={false} name='email' rules={[{ required: true, message: 'Введите эл. адресс', type: 'email'}]} style={{ paddingTop: 10}}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item required={false} name='surname' rules={[{ required: true, message: 'Введите фамилию'}]}>
                    <Input placeholder="Фамилия" />
                </Form.Item>
                <Form.Item required={false} name='name' rules={[{ required: true, message: 'Введите имя'}]}>
                    <Input placeholder="Имя" />
                </Form.Item>
                <Form.Item required={false} name='patronymic' rules={[{ required: true, message: 'Введите отчество'}]}>
                    <Input placeholder="Отчество" />
                </Form.Item>
                <Form.Item required={false} name='position' rules={[{ required: true, message: 'Выберете должность'}]}>
                    <Select placeholder="Должность">
                        <Option value='Тестировщик'>Тестировщик</Option>
                        <Option value='Разработчик'>Разработчик</Option>
                        <Option value='Менеджер'>Менеджер</Option>
                    </Select>
                </Form.Item>
                <Form.Item label='Дата рождения'>
                    <Form.Item name='day' required={false} rules={[{ required: true, message: 'день' }]} style={{ display: 'inline-block', width: '20%', margin: '0' }}>
                        <InputNumber placeholder='День'  min={1} max={31}/>
                    </Form.Item>
                    <Form.Item name='month' required={false} rules={[{ required: true, message: 'Введите месяц' }]} style={{ display: 'inline-block', width: '40%', paddingLeft: '24px', margin: '0'}}>
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
                </Form.Item>
                <Form.Item name='tlephone' required={false} rules={[{ pattern: /^(\+)(\d+$)/ , message: 'Некорректный номер' }]}>
                    <Input placeholder='Телефон (опционально)'/>
                </Form.Item>
                <Form.Item name='gender' required={false} rules={[{ required: true, message: 'Выберете пол' }]}>
                    <Select placeholder="Пол">
                        <Option value='Мужской'>Мужской</Option>
                        <Option value='Женской'>Женский</Option>
                    </Select>
                </Form.Item>
                <hr />
                <Form.Item style={{textAlign: 'end', margin: 0, padding: 16}}>
                    <Button style={{ width: 105 }} onClick={droverDisplay}>Отмена</Button>
                    <Button style={{ width: 105, marginLeft: 24 }} type='primary' htmlType="submit">Пригласить</Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )
}

export default AddNewInvoicers

const Wrapper = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(1, 0, 0, 0.5);
    left: 0px;
    top: 0;
    opacity:0; /*Элемент полностью прозрачный (невидимый)*/
    transition: 0.7s; /*Скорость перехода состояния элемента*/
    animation: show 1s 1; /* Указываем название анимации, её время и количество повторов*/
    animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    @keyframes show{
        0%{
        opacity:0;
        }
        100% {
        opacity:1;
        }
        }
    
    h1 {
        font-size: 16px;
        margin: 0;
        padding: 16px;
    }
    hr {
        width: 100%;
    }
`
