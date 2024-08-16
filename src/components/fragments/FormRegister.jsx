import React from "react";
import FormGroup from "../elements/FormGroup.jsx";
import { Link } from "react-router-dom";
import Button from "../elements/Button.jsx";

const FormRegister = () => {
    return (
        <div>
            <form action="">
            <FormGroup type="text" label="Username" placeholder="Masukkan Username"/>
            <FormGroup type="password" label="Kata Sandi" placeholder="Masukkan kata sandi"/>
            <FormGroup type="password" label="Konfirmasi Kata Sandi" placeholder="Masukkan kata sandi"/>
            </form>
            <div className="flex justify-between mb-6">
                <div className='text-gray-300 text-sm'>Sudah punya akun?<Link className='text-white' to="/login">Masuk</Link></div>
            </div>
            <Button href="/login" color="gray-500">Daftar</Button>
            <div className="flex justify-center text-sm text-gray-300 my-2">Atau</div>
            <Button color="transparent" imageUrl="src\assets\google.png">Daftar dengan Google</Button>
        </div>
        
    );
}

export default FormRegister