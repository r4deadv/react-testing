import React from 'react'

const InputDisplayHeader = ({firstNameVal}) => {
    return <h1>Hello, {firstNameVal ? `${firstNameVal}` : 'what is your name?'}</h1>
          
}
export default InputDisplayHeader