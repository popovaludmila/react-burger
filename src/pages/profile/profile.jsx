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
            <div className={profileStyles.wrapper}>
                <div className={profileStyles.nav}>
                   <ul className='pb-20 text text_type_main-medium'>
                        <li className={`${profileStyles.item}`}>
                            <a  href="2">Профиль</a>
                        </li>
                        <li className={`${profileStyles.item} `}>
                            <a className='text_color_inactive' href="2">История заказов</a>
                        </li>
                        <li className={`${profileStyles.item}`}>
                            <a className='text_color_inactive' href="2">Выход</a>
                        </li>
                    </ul>
                    <p className={`${profileStyles.caption} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br></br> изменить свои персональные данные</p>  
                </div>
               
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
            </div>
        </>
    )
}