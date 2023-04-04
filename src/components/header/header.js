import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import { Outlet } from 'react-router-dom';

import '../../index.css'
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className="container">

                    <div className={`${headerStyles.wrapper} pt-6 pb-6`}>
                        <nav>
                            <ul className={headerStyles.menu}>
                                <li className={`${headerStyles.item}`}>
                                
                                    <a className={`${headerStyles.link} text text_type_main-default p-1`} href="1">
                                        <BurgerIcon />
                                        <span className={`${headerStyles.link} pl-2`}>Конструктор</span>
                                    </a>
                                </li>

                                <li className={`${headerStyles.item} ml-10`} >
                                    <a className={`${headerStyles.link} text text_type_main-default`} href="1">
                                        <ListIcon type="secondary" />
                                        <span className={`${headerStyles.link} text_color_inactive p-1 pl-2`}>Лента заказов</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <a className={`${headerStyles.logo} pl-28`} href="index.html">
                            <Logo /> 
                        </a>
                        
                        <div className={headerStyles.item}> 
                            <button className={`${headerStyles.button}`}>
                                <ProfileIcon type="secondary" />
                                <span className={`${headerStyles.profile} text text_type_main-default p-4 pl-2 text_color_inactive`}>Личный кабинет</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}


export default Header;