import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { register } from '../../services/actions/user';

import registerStyles from './register.module.css';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setValue] = useState({ 
        name: '',
        email: '',
        password: ''
    });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onFormSubmit = e => {
        e.preventDefault();
        const user = {
            email: form.email,
            name: form.name,
            password: form.password
        }
        dispatch(register(user, () => navigate('/')));
       
    }
    

    return (
        <>
            <div className={registerStyles.wrapper}>
                <form className={registerStyles.form} onSubmit={onFormSubmit}>
                    <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        value={form.name}
                        name="name"
                        />
                    </div>
                    <div className="mb-6">
                        <EmailInput
                        name='email'
                        isIcon={false}
                        value={form.email}
                        onChange={onChange}
                        />  
                    </div>
                    <div className="mb-6">
                        <PasswordInput
                        onChange={onChange}
                        name='password'
                        icon="ShowIcon"
                        value={form.password}
                        />   
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </form>
               
                <p className="text text_type_main-default text_color_inactive pt-20">
                        Уже зарегистрированы?
                        <Link to="/login" className={`${registerStyles.link} pl-2`} >Войти</Link>
                </p>
            </div>
        </>
    )
}