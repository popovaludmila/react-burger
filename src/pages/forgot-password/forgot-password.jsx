import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/data';
import { request } from '../../utils/data-api';
import forgotPasswordStyles from './forgot-password.module.css';

export const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [form, setValue] = useState({ 
        email: ''
    });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();

        request(`${BASE_URL}/password-reset`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then((data) =>{
            if (data.success) {
               navigate('/reset-password');
            }
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <>
            <div className={forgotPasswordStyles.wrapper} onSubmit={onSubmit}>
                <form className={forgotPasswordStyles.form}>
                    <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
                    <div className="mb-6">
                        <EmailInput
                        name='email'
                        isIcon={false}
                        value={form.email}
                        onChange={onChange}
                        placeholder={'Укажите e-mail'}
                        />  
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
                        Восстановить
                    </Button>
                </form>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <a className={`${forgotPasswordStyles.link} pl-2`} href='1'>Войти</a>
                    </p>
                </div>
        </>
    )
}