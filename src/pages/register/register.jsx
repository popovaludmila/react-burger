import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import registerStyles from './register.module.css';

export const RegisterPage = () => {
    const [form, setValue] = useState({ 
        firstName: '',
        email: '', 
        password: '', 
    });

   const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
    

    return (
        <>
            <div className={registerStyles.wrapper}>
                <form className={registerStyles.form}>
                    <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        value={form.firstName}
                        name="firstName"
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
                    <Button htmlType="button" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                </form>
               
                <p className="text text_type_main-default text_color_inactive pt-20">
                        Уже зарегистрированы?
                        <a className={`${registerStyles.link} pl-2`} href='1'>Войти</a>
                </p>
            </div>
        </>
    )
}