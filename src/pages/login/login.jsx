import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/actions/user';

import loginStyles from './login.module.css';

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setValue] = useState({ 
        email: '', 
        password: '', 
    });

   const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
    
  const onFormSubmit = e => {
    e.preventDefault();
    const user = {
        email: form.email,
        password: form.password
    }
    dispatch(login(user, () => navigate('/')));
}


    return (
        <>
            <div className={loginStyles.wrapper}>
                <form className={loginStyles.form} onSubmit={onFormSubmit}>
                    <h2 className='text text_type_main-medium mb-6'>Вход</h2>
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
                        Войти
                    </Button>
                </form>
                    
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вы — новый пользователь?
                        <Link to="/register" className={`${loginStyles.link} pl-2`}>Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-default text_color_inactive ">
                        Забыли пароль?
                        <Link to="/forgot-password" className={`${loginStyles.link} pl-2`} >Восстановить пароль</Link>
                    </p>
                </div>
        </>
    )
}