import React, { useState } from 'react'

const CountContainer = () => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    const decrement = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CountContainer