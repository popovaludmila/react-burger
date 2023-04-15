import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from '../../services/actions/user';

import profileNavStyles from './profile-nav.module.css';


export const ProfileNav = () => {
    const dispatch = useDispatch();
    const setActive = ({isActive}) => isActive ? 'active' : 'text_color_inactive';

    const onLogout = () => {
        const token = localStorage.getItem('refreshToken');
        dispatch(logout({"token": token}));
    }

    return (
        <>
            <div className='container'>
                <div className={`${profileNavStyles.wrapper} mt-30`}>
                    <div className={`${profileNavStyles.nav} mr-10`}>
                        <ul className='pb-20 text text_type_main-medium'>
                            <li className={`${profileNavStyles.item} `}>
                                <NavLink to="/profile" className={setActive}>Профиль</NavLink>
                            </li>
                            <li className={`${profileNavStyles.item} `}>
                                <NavLink to="profile/orders" className={setActive}>История заказов</NavLink>
                            </li>
                            <li className={`${profileNavStyles.item}`}>
                                <NavLink to="/" onClick={onLogout} className={setActive}>Выход</NavLink>
                            </li>
                        </ul>
                        <p className={`${profileNavStyles.caption} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br></br> изменить свои персональные данные</p>  
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}