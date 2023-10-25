import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={s.navbar}>
            <div className={'cont'}>
                <NavLink to={'/'} className={s.link}>Главная</NavLink>
                <NavLink to={'/users'} className={s.link}>Список пользователей</NavLink>
            </div>
        </header>
    );
};

export default Navbar;