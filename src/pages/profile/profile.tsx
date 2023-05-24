import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useForm } from '../../hooks/useForm';
import { updateUserProfile } from '../../services/actions/user';

import profileStyles from './profile.module.css';

export const ProfilePage = ():JSX.Element => {

    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const {name, email} = useSelector(state => state.user.user);

    const {form, handleChange, setForm} = useForm({  
        name: name,
        email: email, 
        password: '' 
    });
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setIsEdit(true);
    };
  
    const resetForm = () => {
        setForm({
            name: name,
            email: email, 
            password: ''
        })
        setIsEdit(false);
    }

    const onFormUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const authToken = localStorage.getItem('accessToken');
        if(authToken && form.name && form.email) {
            dispatch(updateUserProfile(form.name, form.email, form.password, authToken));
        }
        setIsEdit(false);
    }

    return (
        <>
            <form onSubmit={onFormUpdate}>
                <div className="mb-6">
                    <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}
                    value={form.name ?? ""}
                    icon="EditIcon"
                    name='name'
                    />
                </div>
                <div className="mb-6">
                    <Input
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={onChange}
                    value={form.email ?? ""}
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
                {isEdit && 
                    <div className={profileStyles.buttons}>
                        <Button htmlType="button" onClick={resetForm} type="secondary" size="medium" extraClass="mr-5"> Отменить</Button>                   
                        <Button htmlType="submit" type="primary" size="medium"> Сохранить </Button>                   
                    </div>
                }
            </form>
        </>
    )
}