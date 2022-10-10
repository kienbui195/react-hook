import { useState } from 'react'

const Counter = (props) => {
    let [count, setCount] = useState(0);

    return (
        <div>
            <p>Gia tri: {count}</p>
            <button onClick={()=>setCount(count+1)}>Tang</button>
        </div>
    )
}

export default Counter;
