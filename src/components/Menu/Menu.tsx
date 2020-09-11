import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <i className="material-icons">business</i>
                <span className="menu__logo-text">LOGO</span>
            </div>
            <ul className="menu__row">
                <li className="menu__item">
                    <NavLink className="menu__link" to="/" exact>
                        <i className="material-icons">format_list_bulleted</i>
                        <span className="menu__link-text">Табличная</span>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/grid">
                        <i className="material-icons">apps</i>
                        <span className="menu__link-text">Блочная</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;