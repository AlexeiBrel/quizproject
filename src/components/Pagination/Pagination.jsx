import React from 'react';
import cl from './Pagination.module.scss';

const Pagination = () => {
    return (
        <ul className={cl.page}>
            <li className={[cl.page__numbers, cl.active].join(' ')}> 1</li>
            <li className={cl.page__numbers}>2</li>
            <li className={cl.page__numbers}>3</li>
            <li className={cl.page__dots}>...</li>
            <li className={cl.page__numbers}> 13</li>
        </ul>
    );
};

export default Pagination;