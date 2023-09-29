import React from 'react';
import cl from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={cl.header}>
            <h1 className={cl.header__title}>{props.title}</h1>
            <h3 className={cl.header__subtitle}>{props.subtitle}</h3>
        </header>
    );
};

export default Header;