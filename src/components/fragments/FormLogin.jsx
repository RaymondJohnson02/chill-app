import React from "react";
import FormGroup from "../elements/FormGroup.jsx";
import { Link } from "react-router-dom";
import Button from "../elements/Button.jsx";

const FormLogin = () => {
    return (
        <div>
            <form action="">
            <FormGroup type="text" label="Username" placeholder="Masukkan Username"/>
            <FormGroup type="password" label="Kata Sandi" placeholder="Masukkan kata sandi"/>
            </form>
            <div className="flex justify-between mb-6">
                <div className='text-gray-300 text-sm'>Belum punya akun?<Link className='text-white' to="/register">Daftar</Link></div>
                <a className='text-white text-sm' href="">Lupa kata sandi?</a>
            </div>
            <Button href="/home" color="gray-500">Masuk</Button>
            <div className="flex justify-center text-sm text-gray-300 my-2">Atau</div>
            <Button color="transparent" imageUrl="/images/google.png">Masuk dengan Google</Button>
        </div>
        
    );
}

export default FormLogin