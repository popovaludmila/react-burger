import {useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerMenuStyles from './burger-menu.module.css';

const BurgerMenu = () => {
    const [currentTab, setCurrentTab] = useState('bun');

    const onTabClick = (tab) => {
        const activeTab = document.getElementById(tab)
        setCurrentTab(tab);

        activeTab.scrollIntoView({behavior:"smooth"});
    }

    return (
        <nav>
            <ul className={burgerMenuStyles.list}> 
                <li>
                   <Tab value="bun" active={currentTab === 'bun'} onClick={onTabClick}>
                        Булки
                    </Tab> 
                </li>
                <li>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={onTabClick}>
                        Соусы
                    </Tab>
                </li>
                <li>
                   <Tab value="main" active={currentTab === 'main'} onClick={onTabClick}>
                        Начинки
                    </Tab> 
                </li>
            </ul>   
        </nav>
    )
}

export default BurgerMenu;