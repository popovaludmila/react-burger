import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

import profileStyles from './profile.module.css';

export const ProfilePage = () => {
    const [form, setValue] = useState({ 
        firstName: 'Марк',
        email: 'mail@stellar.burgers', 
        password: '*****', 
    });

   const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

    return (
        <>
            <form>
                <div className="mb-6">
                    <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={form.firstName}
                    icon="EditIcon"
                    name='firstName'
                    />
                </div>
                <div className="mb-6">
                    <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={onChange}
                    value={form.email}
                    name='email'
                    icon="EditIcon"
                    />
                </div>
                <div className="mb-6">
                    <PasswordInput
                    onChange={onChange}
                    name='password'
                    value={form.password}
                    placeholder='Пароль'
                    icon="EditIcon"
                    />   
                </div>                   
            </form>
        </>
    )
}