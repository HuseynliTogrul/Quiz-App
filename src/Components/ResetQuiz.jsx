import React from 'react'
import { data } from '../assets/data';

function ResetQuiz({ setIndex, setQuestion, setScore, setLock, setResult }) {
    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <>
            <button onClick={reset} className='border rounded-lg bg-[rgb(68 130 216)] mt-5 py-3 px-6 hover:bg-slate-600 transition-all duration-300'>Reset</button>
        </>
    )
}

export default ResetQuiz