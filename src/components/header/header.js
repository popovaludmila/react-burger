import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import headerStyles from './header.module.css';

const Header = () => {

    const setActive = ({isActive}) => isActive ? 'active' : 'text_color_inactive';
    const userName = useSelector(state => state.user.user?.name) || 'Личный кабинет';
    return (
        <>
            <header className={headerStyles.header}>
                <div className="container">

                    <div className={`${headerStyles.wrapper} pt-6 pb-6`}>
                        <nav>
                            <ul className={headerStyles.menu}>
                                <li className={`${headerStyles.item}`}>
                                
                                    <NavLink  to="/" className={`${headerStyles.link}  text text_type_main-default p-1 `} >
                                        <BurgerIcon />
                                        <span className={`${headerStyles.link} pl-2`}>Конструктор</span>
                                    </NavLink>
                                </li>

                                <li className={`${headerStyles.item} ml-10`} >
                                    <NavLink className={`${headerStyles.link} text text_type_main-default`}>
                                        <ListIcon type="secondary" />
                                        <span className={`${headerStyles.link}  p-1 pl-2`}>Лента заказов</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className={`${headerStyles.logo} pl-28`}>
                            <Logo /> 
                        </div>
                        
                        <div className={headerStyles.item}> 
                            <NavLink to="/profile" className={`${headerStyles.link}`}>
                                <ProfileIcon type="secondary" />
                                <span className={`${headerStyles.profile} text text_type_main-default p-4 pl-2`}>{userName}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}


export default Header;