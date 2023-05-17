import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink, Outlet, useMatch } from 'react-router-dom';
import { useSelector } from '../../hooks/hooks';
import { FEED, PROFILE } from '../../utils/data';

import headerStyles from './header.module.css';

const Header = () => {
    const userName = useSelector(state => state.user.user?.name) || 'Личный кабинет';
    const matchConstructor = useMatch("/");
    const matchOrdersFeed = useMatch("/orders-feed");
    const matchProfile = useMatch("/profile/*")

    return (
        <>
            <header className={headerStyles.header}>
                <div className="container">

                    <div className={`${headerStyles.wrapper} pt-6 pb-6`}>
                        <nav>
                            <ul className={headerStyles.menu}>
                                <li className={`${headerStyles.item}`}>
                                
                                    <NavLink to="/" className={`${headerStyles.link} text text_type_main-default p-1 `}  >
                                        <BurgerIcon type={matchConstructor ? "primary" : "secondary"} />
                                        <span className={matchConstructor ? `${headerStyles.active}` : `${headerStyles.inactive}` }>Конструктор</span>
                                    </NavLink>
                                </li>

                                <li className={`${headerStyles.item} ml-10`} >
                                    <NavLink to={`/${FEED}`} className={`${headerStyles.link} text text_type_main-default p-4`} >
                                        <ListIcon type={matchOrdersFeed ? "primary" : "secondary"} />
                                        <span className={matchOrdersFeed ? `${headerStyles.active}` : `${headerStyles.inactive}` }>Лента заказов</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <Link to="/" className={`${headerStyles.logo} pl-28`}>
                            <Logo /> 
                        </Link>
                        
                        <div className={headerStyles.item}> 
                            <NavLink to={`/${PROFILE}`} className={`${headerStyles.link} text text_type_main-default `}>
                                <ProfileIcon type={matchProfile ? "primary" : "secondary"} />
                                <span className={matchProfile ? `${headerStyles.active}` : `${headerStyles.inactive}`}>{userName}</span>
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