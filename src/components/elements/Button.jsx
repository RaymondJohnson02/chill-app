import React from 'react'

const Button = (props) => {
    const { children, color, imageUrl = '' } = props;
    return (
        <button className={`flex justify-center items-center p-2 border border-gray-200 rounded-full bg-${color} w-full text-sm text-white`}>
            {imageUrl ? <img className='w-5 h-5 me-4' src={imageUrl} alt="Google Logo"/> : ''}
            {children}
        </button>
    );
}

export default Button