import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../hooks/hooks';
import { useForm } from '../../hooks/useForm';
import { forgotPassword } from '../../services/actions/user';
import { LOGIN } from '../../utils/data';
import forgotPasswordStyles from './forgot-password.module.css';

export const ForgotPasswordPage = ():JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {form, handleChange} = useForm({  
        email: ''
    });

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(forgotPassword(form.email, () => navigate('/reset-password')));
    }

    return (
        <>
            <div className={forgotPasswordStyles.wrapper}>
                <form className={forgotPasswordStyles.form} onSubmit={onFormSubmit}>
                    <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
                    <div className="mb-6">
                        <EmailInput
                        name='email'
                        isIcon={false}
                        value={form.email}
                        onChange={handleChange}
                        placeholder={'Укажите e-mail'}
                        />  
                    </div>
                    <Button htmlType="submit" type="primary" size="medium">
                        Восстановить
                    </Button>
                </form>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        Вспомнили пароль?
                        <Link to={`/${LOGIN}`} className={`${forgotPasswordStyles.link} pl-2`}>Войти</Link>
                    </p>
                </div>
        </>
    )
}