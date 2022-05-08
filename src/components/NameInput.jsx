import React, { useState } from 'react'

const NameInput = () => {
    const [firstNameVal, setFirstNameVal] = useState('')

    const updateNameValue = e => {
        setFirstNameVal(e.target.value)
    }

    return (
        <div className='form-input'>
            <h1>Hello, {firstNameVal ? `${firstNameVal}` : 'what is your name?'}</h1>
            <label>First Name:</label>
            <input
                id='first-name'
                type='text'
                value={firstNameVal}
                onChange={updateNameValue}
            />
        </div>
    )
}
export default NameInput