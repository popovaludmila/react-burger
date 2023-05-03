import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { ErrorModal } from '../../components/modal/error-modal/error-modal';
import Modal from '../../components/modal/modal';
import { useForm } from '../../hooks/useForm';
import { errorClean, register } from '../../services/actions/user';
import { LOGIN } from '../../utils/data';

import registerStyles from './register.module.css';

export const RegisterPage = ():JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
     //@ts-ignore
    const errorMessage = useSelector(state => state.user.errorMessage);
    const errorText = errorMessage?.toUpperCase();

    const {form, handleChange} = useForm({  
        name: '',
        email: '', 
        password: '' 
    });
   
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email: form.email,
            name: form.name,
            password: form.password
        }
         //@ts-ignore
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
                        onChange={handleChange}
                        value={form.name}
                        name="name"
                        />
                    </div>
                    <div className="mb-6">
                        <EmailInput
                        name='email'
                        isIcon={false}
                        value={form.email}
                        onChange={handleChange}
                        />  
                    </div>
                    <div className="mb-6">
                        <PasswordInput
                        onChange={handleChange}
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