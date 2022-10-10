import { useState } from 'react'

export default function DoubleCount() {

    let [count, setCount] = useState(0)

    return (
        <>
            <div>
                <p>Count: {count} </p>
                <button onClick={()=>setCount(count+1)}>Add 1</button>
            </div>

            <div>
                <p>Count: {count + 2} </p>
                <button onClick={()=>setCount(count+2)}>Add 2</button>
            </div>
        </>
    )
}