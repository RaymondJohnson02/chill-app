import React from 'react'

const TextLink = (props) => {
    const { children, href = '' } = props;
    return (
        <div className="text-sm text-gray-300 mb-3"><a href={href}>{children}</a></div>
    );
}

export default TextLink

