import { useEffect, useState } from 'react'

const TimeCount = (props) => { 
    let [count, setCount] = useState(10);

    useEffect(() => {
       setTimeout(()=>setCount(count -1 ),1000)
    }, [count])

    return (
        <>
            <p>Count down from { (count > 0 ? count : alert(`Time's up`) ) }</p>
        </>
    )
}

export default TimeCount;