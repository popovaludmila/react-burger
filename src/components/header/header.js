import { BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';

import '../../index.css'
import headerStyles from './header.module.css';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className="container">

                <div className={`${headerStyles.wrapper} pt-6 pb-6`}>
                    <nav>
                        <ul className={headerStyles.menu}>
                            <li className={headerStyles.item} >
                                <BurgerIcon />
                                <a className="text text_type_main-default p-4 pr-7 pl-2" href="1">Конструктор</a>
                            </li>

                            <li className={headerStyles.item}>
                                <ListIcon type="secondary" />
                                <a className="text text_type_main-default text_color_inactive p-4 pl-2" href="1">Лента заказов</a>
                            </li>
                        </ul>
                    </nav>

                    <a className={`${headerStyles.logo} pl-28`} href="index.html">
                        <Logo /> 
                    </a>
                    
                    <div className={headerStyles.profile}>
                        <ProfileIcon type="secondary" />
                        <button className="text text_type_main-default text_color_inactive p-4 pl-2">
                            Личный кабинет
                        </button>
                    </div>
                </div>
            </div>
        </header>
        
    )
}


export default Header;