import React from 'react'

const Input = (props) => {
    const { type, placeholder} = props;
    return (
        <input type={type} className='border border-gray-200 p-2 rounded-full bg-transparent text-sm text-white' placeholder={placeholder}/>
    );
}

export default Input