import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { ErrorModal } from '../../components/modal/error-modal/error-modal';
import Modal from '../../components/modal/modal';
import { errorClean, register } from '../../services/actions/user';
import { LOGIN } from '../../utils/data';

import registerStyles from './register.module.css';

export const RegisterPage = ():JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.user.errorMessage);
    const errorText = errorMessage?.toUpperCase();

    const [form, setValue] = useState({ 
        name: '',
        email: '',
        password: ''
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const user = {
            email: form.email,
            name: form.name,
            password: form.password
        }
        dispatch(register(user, () => navigate('/')));
       
    }
    

    return (
        <>
            <div className={registerStyles.wrapper}>
                <form className={registerStyles.form} onSubmit={onFormSubmit}>
                    <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
                    <div className="mb-6">
                        <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={onChange}
                        value={form.name}
                        name="name"
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
                    <Button htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                    {errorMessage !== null &&
                        <Modal modalTitle={''} onCloseClick={() => dispatch(errorClean())}>
                            <ErrorModal errorMessage={errorText} />
                        </Modal>
                    }
                </form>
               
                <p className="text text_type_main-default text_color_inactive pt-20">
                        Уже зарегистрированы?
                        <Link to={`/${LOGIN}`} className={`${registerStyles.link} pl-2`} >Войти</Link>
                </p>
            </div>
        </>
    )
}