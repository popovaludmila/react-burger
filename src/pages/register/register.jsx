import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import registerStyles from './register.module.css';

export const RegisterPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');

    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    const onEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <>
            <div className={registerStyles.wrapper}>
                <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        
                        />
                    </div>
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
                        Зарегистрироваться
                    </Button>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Уже зарегистрированы?
                        <a className={`${registerStyles.link} pl-2`} href='1'>Войти</a>
                    </p>
                </div>
        </>
    )
}