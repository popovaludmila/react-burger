import {useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerMenuStyles from './burger-menu.module.css';

const BurgerMenu = () => {
    const [currentTab, setCurrentTab] = useState('bun')

    return (
        <div className={burgerMenuStyles.list}>
            <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                Булки
            </Tab>
            <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                Соусы
            </Tab>
            <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                Начинки
            </Tab>
    </div>
    )
}

export default BurgerMenu;