import React from 'react'

const Label = (props) => {
    const { children, name = '' } = props;
    return (
        <label htmlFor={name} className="text-white">{children}</label>
    );
}

export default Label