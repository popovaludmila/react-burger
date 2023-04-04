import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import loginStyles from './login.module.css';

export const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    const onEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <>
            <div className={loginStyles.wrapper}>
                <h2 className='text text_type_main-medium mb-6'>Вход</h2>
                
                    <div className="mb-6">
                        <EmailInput
                        name={'email'}
                        isIcon={false}
                        value={email}
                        onChange={onEmailChange}
                        />  
                    </div>
                    <div className="mb-6">
                        <PasswordInput
                        onChange={onPasswordChange}
                        name={'password'}
                        icon="ShowIcon"
                        value={password}
                        />   
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        Войти
                    </Button>
                    <p className="text text_type_main-default text_color_inactive pt-10">
                        Вы — новый пользователь?
                        <a className={`${loginStyles.link} pl-2`} href='1'>Зарегистрироваться</a>
                    </p>
                    <p className="text text_type_main-default text_color_inactive ">
                        Забыли пароль?
                        <a className={`${loginStyles.link} pl-2`} href='1'>Восстановить пароль</a>
                    </p>
                </div>
        </>
    )
}