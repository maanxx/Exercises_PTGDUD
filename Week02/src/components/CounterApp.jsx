import {useState} from 'react';


function CounterApp() {
const [count, setCount] = useState(0)

const increase = () => {
    setCount(count + 1)
}

const decrease = () => {
    if (count >= 0) {
        setCount(count - 1 )
    }
}

const reset = () => {
    setCount(0)
}

    return (
<div>
    <div style={{color: count > 10 ? "red" : "black"}}>{count}</div>

    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>
</div>
    )
}

export default CounterApp