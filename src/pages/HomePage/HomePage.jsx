import React from 'react';
import CardQuestion from '../../components/CardQuestion/CardQuestion';
import Header from '../../components/Header/Header';

const questions = [
    {
        id: 1, title: 'Сколько вам лет?',
        answers: [
            'Нужны средства для ребёнка младше 10 лет',
            'Мне меньше 25 лет',
            'От 25 до 35 лет',
            'От 35 до 45 лет',
            'Мне больше 45 лет'
        ]
    },
    {
        id: 2, title: 'Какой у вас тип кожи?',
        answers: [
            'Сухая',
            'Нормальная',
            'Комбинированная',
            'Жирная'
        ]
    },
    {
        id: 3, title: 'Беспокоят ли воспаления на лице?', answers: [
            'Да',
            'Нет',
            'Иногда'
        ]
    }
]

const HomePage = () => {
    return (
        <>
            <Header
                title='Онлайн-подбор средств для лица'
                subtitle='Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов'

            />
            <main style={{ marginTop: '35px' }}>
                <section>
                    <CardQuestion questions={questions} />
                </section>
            </main>
        </>
    );
};

export default HomePage;