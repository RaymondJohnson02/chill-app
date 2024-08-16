import React from 'react'
import Input from '../elements/Input.jsx'
import Label from '../elements/Label.jsx'

const FormGroup = (props) => {
    const { type, label, placeholder = '' } = props;
    return (
        <div className="my-3 flex flex-col">
            <Label>{label}</Label>
            <Input type={type} placeholder={placeholder}/>
        </div>
    );
}

export default FormGroup