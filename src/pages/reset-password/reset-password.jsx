import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import resetPasswordStyles from './reset-password.module.css';

export const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('');

    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className={resetPasswordStyles.wrapper}>
                <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
                    <div className="mb-6">
                        <PasswordInput
                        onChange={onPasswordChange}
                        name={'password'}
                        icon="ShowIcon"
                        value=''
                        placeholder='Введите новый пароль'
                        />   
                    </div>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        
                        />
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        Сохранить
                    </Button>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <a className={`${resetPasswordStyles.link} pl-2`} href='1'>Войти</a>
                    </p>
                </div>
        </>
    )
}