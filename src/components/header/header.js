import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import headerStyles from './header.module.css';

const Header = () => {

    const setActive = ({isActive}) => isActive ? '' : 'text_color_inactive';
    const userName = useSelector(state => state.user.user?.name) || 'Личный кабинет';

    const isBurgerConstructor = `!!useRouteMatch("/")`;
    const isOrdersFeed = !`!useRouteMatch("/orders-feed")`;
    const isProfile = `!!useRouteMatch("/profile")`;

    return (
        <>
            <header className={headerStyles.header}>
                <div className="container">

                    <div className={`${headerStyles.wrapper} pt-6 pb-6`}>
                        <nav>
                            <ul className={headerStyles.menu}>
                                <li className={`${headerStyles.item}`}>
                                
                                    <NavLink  to="/" className={`${headerStyles.link} p-1 `} activeClassName={setActive}  >
                                        <BurgerIcon type={isBurgerConstructor ? "primary" : "secondary"} />
                                        <span className="text text_type_main-default pl-2">Конструктор</span>
                                    </NavLink>
                                </li>

                                <li className={`${headerStyles.item} ml-10`} >
                                    <NavLink className={`${headerStyles.link}`} activeClassName={setActive} to="/orders-feed"  >
                                        <ListIcon type={isOrdersFeed ? "primary" : "secondary"} />
                                        <span className="text text_type_main-default p-1 pl-2">Лента заказов</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className={`${headerStyles.logo} pl-28`}>
                            <Logo /> 
                        </div>
                        
                        <div className={headerStyles.item}> 
                            <NavLink className={`${headerStyles.link} `} activeClassName={setActive} to="/profile" >
                                <ProfileIcon type={isProfile ? "primary" : "secondary"} />
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