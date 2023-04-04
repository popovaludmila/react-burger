import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import forgotPasswordStyles from './forgot-password.module.css';

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const onEmailChange = e => {
        setEmail(e.target.value)
    }



    return (
        <>
            <div className={forgotPasswordStyles.wrapper}>
                <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
                    <div className="mb-6">
                        <EmailInput
                        name={'email'}
                        isIcon={false}
                        value={email}
                        onChange={onEmailChange}
                        placeholder={'Укажите e-mail'}
                        />  
                    </div>
                    <Button htmlType="button" type="primary" size="medium">
                        Восстановить
                    </Button>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <a className={`${forgotPasswordStyles.link} pl-2`} href='1'>Войти</a>
                    </p>
                </div>
        </>
    )
}