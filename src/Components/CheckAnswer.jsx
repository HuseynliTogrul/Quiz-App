import React from 'react'

function CheckAnswer({ question, selectedOption, setSelectedOption, setScore, setLock, lock }) {
    const checkAns = (ans) => {
        if (lock === false) {
            setSelectedOption(ans)
            if (ans === question.ans) {
                setScore((score) => score + 1);
            }
            setLock(true)
        }
    }

    return (
        <>
            <ul className='flex flex-col gap-[15px]'>
                {Object.entries(question.options).map(([key, value]) => (
                    <li
                        onClick={() => checkAns(key)}
                        key={key}
                        className={`border border-gray-600 border-solid rounded-lg cursor-pointer p-5 ${!selectedOption ? 'hover:bg-gray-700' : ''} ${selectedOption && (key === question.ans ? 'bg-green-600' : '')} ${selectedOption === key && key !== question.ans ? 'bg-red-600' : ''}`}>{value}</li>
                ))}
            </ul>
        </>
    )
}

export default CheckAnswer