import React from 'react'
import { data } from '../assets/data';
import ResetQuiz from './ResetQuiz';

function EndQuizQuestion({ score, setIndex, setQuestion, setScore, setLock, setResult }) {
    return (
        <>
            <div className="flex justify-center items-center flex-col h-[85vh]">
                <h2 className='text-3xl font-semibold mb-5'>Quiz Bitdi!</h2>
                <p className="text-2xl">
                    Siz <b className='text-blue-500'>{data.length}</b> sualdan <b className={score > 6 ? 'text-green-500' : score > 3 ? 'text-yellow-500' : 'text-red-500'}>
                        {score}
                    </b> doğru cavab verdiniz.
                </p>
                <ResetQuiz
                    setIndex={setIndex}
                    setQuestion={setQuestion}
                    setScore={setScore}
                    setLock={setLock}
                    setResult={setResult}
                />
            </div>
        </>
    )
}

export default EndQuizQuestion