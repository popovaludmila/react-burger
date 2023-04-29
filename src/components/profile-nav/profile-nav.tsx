import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useMatch } from 'react-router-dom';
import { logout } from '../../services/actions/user';
import { ORDERS, PROFILE } from '../../utils/data';

import profileNavStyles from './profile-nav.module.css';

export const ProfileNav = (): JSX.Element => {

    const dispatch = useDispatch();
    const matchProfile = useMatch("/profile");
    const matchOrderProfile = useMatch("/profile/orders")


    const setActive = (match: any) => match ? `${profileNavStyles.active}` : 'text_color_inactive';

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
                                <NavLink to={`/${PROFILE}`} className={setActive(matchProfile)}>Профиль</NavLink>
                            </li>
                            <li className={`${profileNavStyles.item} `}>
                                <NavLink to={`/${PROFILE}/${ORDERS}`} className={setActive(matchOrderProfile)}>История заказов</NavLink>
                            </li>
                            <li className={`${profileNavStyles.item}`}>
                                <NavLink to="/" onClick={onLogout} className="text_color_inactive">Выход</NavLink>
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