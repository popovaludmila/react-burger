import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, LOGIN } from '../../utils/data';
import { request } from '../../utils/data-api';
import resetPasswordStyles from './reset-password.module.css';

export const ResetPasswordPage = () => {
    const [form, setValue] = useState({ 
        password: '', 
        token: ''
    });

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();

        request(`${BASE_URL}/password-reset/reset`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then((data) =>{
            if (data.success) {
                console.log(data);
            }
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <>
            <div className={resetPasswordStyles.wrapper}>
                <form className={resetPasswordStyles.form} onSubmit={onSubmit}>
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
                        value={form.token}
                        name="token"
                        />
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <Link to={`/${LOGIN}`}  className={`${resetPasswordStyles.link} pl-2`}>
                            Войти
                        </Link>
                    </p>
                </div>
        </>
    )
}