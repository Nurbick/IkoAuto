import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="container">
                <nav className="navBar__links">
                    <NavLink to="/" className={`navBar__link ${({isActive})=> isActive?"active" : ''}`}>
                        Главная cтраница
                    </NavLink>
                    <NavLink to="/catalog" className={`navBar__link ${({isActive})=> isActive?"active" : ''}`}>
                        Каталог автомобилей
                    </NavLink>
                    <NavLink to="/map" className={`navBar__link ${({isActive})=> isActive?"active" : ''}`}>
                        Сеть зарядных станций
                    </NavLink>
                    <NavLink to="/Q&A" className={`navBar__link ${({isActive})=> isActive?"active" : ''}`}>
                        Вопрос-ответ
                    </NavLink>
                    <NavLink to="/info" className={`navBar__link ${({isActive})=> isActive?"active" : ''}`}>
                        Полезная информация
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;