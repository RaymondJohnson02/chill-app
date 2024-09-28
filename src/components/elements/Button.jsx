import React from 'react'

const Button = (props) => {
    const { children, bgColor = '', width = 'full', href = '', imageUrl = ''} = props;
    return (
        <a href={href} className={`flex justify-center items-center p-2 border border-gray-200 rounded-full ${bgColor} w-${width} text-sm text-white`}>
            {imageUrl ? <img className='w-4 h-4 me-3' src={imageUrl} alt="Google Logo"/> : ''}
            {children}
        </a>
    );
}

export default Button