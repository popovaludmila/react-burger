import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginStyles from './login.module.css';

export const LoginPage = () => {
    const [form, setValue] = useState({ 
        email: '', 
        password: '', 
    });

   const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
    


    return (
        <>
            <div className={loginStyles.wrapper}>
                <form className={loginStyles.form}>
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
                    <Button htmlType="button" type="primary" size="medium">
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