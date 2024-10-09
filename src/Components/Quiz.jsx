import React, { useState } from 'react';
import { data } from '../assets/data';
import CheckAnswer from './CheckAnswer';
import NextQuestion from './NextQuestion';
import EndQuizQuestion from './EndQuizQuestion';

function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    return (
        <div className='h-screen text-white'>
            <h1 className='p-6 italic text-3xl font-bold'>React Js Quiz</h1>
            <hr />
            {result ? (
                <div className="flex justify-center items-center flex-col h-[85vh]">
                    <EndQuizQuestion
                        score={score}
                        setIndex={setIndex}
                        setQuestion={setQuestion}
                        setScore={setScore}
                        setLock={setLock}
                        setResult={setResult}
                    />
                </div>
            ) : (
                <div className="m-auto w-[500px] flex justify-center flex-col h-[85vh]">
                    <h2 className='text-2xl font-semibold mb-5'>{index + 1}. {question.question}</h2>
                    <div className="">
                        <CheckAnswer
                            question={question}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            setScore={setScore}
                            setLock={setLock}
                            lock={lock}
                        />
                        <NextQuestion
                            setQuestion={setQuestion}
                            setSelectedOption={setSelectedOption}
                            setIndex={setIndex}
                            setLock={setLock}
                            setResult={setResult}
                            index={index}
                            data={data}
                            lock={lock}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;