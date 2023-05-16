import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorModal } from '../../components/modal/error-modal/error-modal';
import Modal from '../../components/modal/modal';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useForm } from '../../hooks/useForm';
import { errorClean, login } from '../../services/actions/user';
import { FORGOT_PASSWORD, REGISTER } from '../../utils/data';

import loginStyles from './login.module.css';

export const LoginPage = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const errorMessage = useSelector(state => state.user.errorMessage);
   
    const errorText = errorMessage?.toUpperCase();

    const {form, handleChange} = useForm({  
        email: '', 
        password: '' 
    });

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(form.email, form.password, () => navigate('/')));
    }


    return (
        <>
            <div className={loginStyles.wrapper}>
                <form className={loginStyles.form} onSubmit={onFormSubmit}>
                    <h2 className='text text_type_main-medium mb-6'>Вход</h2>
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
                        Войти
                    </Button>
                    {errorText !== undefined &&
                        <Modal modalTitle={''} onCloseClick={() => dispatch(errorClean())}>
                            <ErrorModal errorMessage={errorText} />
                        </Modal>
                    }
                </form>
                    
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вы — новый пользователь?
                        <Link to={`/${REGISTER}`} className={`${loginStyles.link} pl-2`}>Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-default text_color_inactive ">
                        Забыли пароль?
                        <Link to={`/${FORGOT_PASSWORD}`} className={`${loginStyles.link} pl-2`} >Восстановить пароль</Link>
                    </p>
                </div>
        </>
    )
}