import {useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerMenuStyles from './burger-menu.module.css';
import { BUN, MAIN, SAUCE } from "../../../utils/data";

const BurgerMenu = () => {
    const [currentTab, setCurrentTab] = useState(BUN);

    const onTabClick = (tab) => {
        const activeTab = document.getElementById(tab)
        setCurrentTab(tab);

        activeTab.scrollIntoView({behavior:"smooth"});
    }

    return (
        <nav>
            <ul className={burgerMenuStyles.list}> 
                <li>
                   <Tab value={BUN} active={currentTab === BUN} onClick={onTabClick}>
                        Булки
                    </Tab> 
                </li>
                <li>
                    <Tab value={SAUCE} active={currentTab === SAUCE} onClick={onTabClick}>
                        Соусы
                    </Tab>
                </li>
                <li>
                   <Tab value={MAIN} active={currentTab === MAIN} onClick={onTabClick}>
                        Начинки
                    </Tab> 
                </li>
            </ul>   
        </nav>
    )
}

export default BurgerMenu;