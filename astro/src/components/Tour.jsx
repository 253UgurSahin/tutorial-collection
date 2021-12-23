import React, { useState } from 'react';

export default function Tour() {
    const [val, setVal] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={() => setVal(val + 1)}>+1</button>
            <button onClick={() => setVal(val - 1)}>-1</button>
            <p>current value: { val }</p>
        </div>
    )
}
