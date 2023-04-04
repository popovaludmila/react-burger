import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import resetPasswordStyles from './reset-password.module.css';

export const ResetPasswordPage = () => {
    const [form, setValue] = useState({ 
        password: '', 
        code: ''
    });

   const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
    

    return (
        <>
            <div className={resetPasswordStyles.wrapper}>
                <form className={resetPasswordStyles.form}>
                    <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
                    <div className="mb-6">
                        <PasswordInput
                        onChange={onChange}
                        name='password'
                        icon="ShowIcon"
                        value={form.password}
                        placeholder='Введите новый пароль'
                        />   
                    </div>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onChange}
                        value={form.code}
                        name="code"
                        />
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <a className={`${resetPasswordStyles.link} pl-2`} href='1'>Войти</a>
                    </p>
                </div>
        </>
    )
}