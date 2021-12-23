import React, { useState } from 'react';

export default function ReactCounter() {
    const [val, setVal] = useState(0);

    const btnClass = "bg-blue-600 text-white text-2xl py-3 px-5 rounded cursor-pointer select-none";
    const valClass = "text-2xl font-bold px-5 select-none";

    return (
        <div className="container flex justify-center gap-3 items-center mt-10">
            <p className={btnClass} onClick={() => setVal(val - 1)}>-</p>
            <p className={valClass}>{val}</p>
            <p className={btnClass} onClick={() => setVal(val + 1)}>+</p>
        </div>
    )
}
