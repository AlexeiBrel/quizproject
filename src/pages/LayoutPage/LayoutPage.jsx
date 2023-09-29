import React from 'react';
import cl from './LayoutPage.module.scss';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
    return (
        <div className={cl.wrapper}>
            <Outlet />
        </div>
    );
};

export default LayoutPage;