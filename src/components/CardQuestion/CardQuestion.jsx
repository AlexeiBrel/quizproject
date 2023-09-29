import React, { useState } from 'react';
import cl from './CardQuestion.module.scss';
import { useNavigate } from 'react-router-dom';


const CardQuestion = ({ questions }) => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const question = questions[step]
    const percentage = Math.round(step / questions.length * 100);

    const onClickVariant = (index) => {

        setStep(step + 1);
        console.log('step :>> ', step)
        if (step === questions.length - 1) {
            navigate('/result');
        }
    }

    const previousQuestion = () => {
        setStep(step - 1);
    }

    return (
        <div className={cl.card}>
            <div className={cl.card__wrap}>
                <p className={cl.total__question}>Вопрос {step} из {questions.length}</p>
                <div className={cl.progress}>
                    <div className={cl.progress__item} style={{ width: `${percentage}%` }}></div>
                </div>
                <h3 className={cl.title}>{question.title}</h3>
                <ul className={cl.list__answers}>
                    {question.answers.map((item, index) =>
                    (<li key={item}>
                        <button onClick={() => onClickVariant(index)} className={cl.btn__answer} type='button'>{item}</button>
                    </li>)
                    )}
                </ul>
                <div className={cl.btn__block}>
                    <button onClick={previousQuestion} className={cl.btn__back} disabled={step > 0 ? false : true} type='button'>Назад</button>
                </div>
            </div>
        </div>
    );
};

export default CardQuestion;
