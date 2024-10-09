import React from 'react'
import { data } from '../assets/data';

function NextQuestion({ setSelectedOption, setQuestion, index, setIndex, lock, setLock, setResult }) {
    const next = () => {
        if (lock === true) {
            setSelectedOption(null);
            if (index + 1 < data.length) {
                setQuestion(data[index + 1]);
                setIndex(index + 1);
                setLock(false);
            } else {
                setResult(true);
            }
        }
    };

    return (
        <>
            <div className="flex items-center flex-col mt-7">
                <button onClick={next} className='border rounded-lg py-3 px-6 bg-[#0080008a]'>Next</button>
                <span className="index mt-2"><b>{index + 1}</b> of <b>{data.length}</b> questions</span>
            </div>
        </>
    )
}

export default NextQuestion