import React from 'react';
import cl from './TextError.module.scss';

const TextError = () => {
    return (
        <div className={cl.error}>
            <h2 className={cl.error__title}>Что-то пошло не так!</h2>
        </div>
    );
};

export default TextError;