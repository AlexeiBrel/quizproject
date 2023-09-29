import React from 'react';
import cl from './CardProduct.module.scss'

const CardProduct = ({ product }) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__wrap}>
                <div className={cl.card__img}>
                    <img src={product.image} alt={product.title} />
                    <button className={cl.card__btn__favorites} type='button'></button>
                </div>
                <div className={cl.card__body}>
                    <h2 className={cl.card__title}>{product.title}</h2>
                    <div className={cl.card__price}>
                        <p className={cl.card__oldprice}>{product.oldPrice}</p>
                        <p className={cl.card__newprice}>{product.price} <span>руб</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;