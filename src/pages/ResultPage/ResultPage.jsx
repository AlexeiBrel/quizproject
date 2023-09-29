import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import Service from '../../api/Service';
import CardProduct from '../../components/CardProduct/CardProduct';

import cl from './ResultPage.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

import TextError from '../../components/TextError/TextError';

const ResultPage = () => {
    const [products, setProducts] = useState([]);
    const [fetchData, isLoading, Error] = useFetching(async () => {
        const data = await Service.getAll()
        setProducts(data)
    })

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (Error) {
        return <TextError />
    }

    return (
        <>
            <Header
                title='Результат'
                subtitle='Мы подобрали для вас наиболее подходящие средства'

            />
            <main style={{ marginTop: '35px' }}>

                <section>
                    <div className={cl.wrap}>
                        {products.map(item => <CardProduct key={item.id} product={item} />)}
                    </div>
                    <Pagination />
                </section>
            </main>
        </>
    );
};

export default ResultPage;