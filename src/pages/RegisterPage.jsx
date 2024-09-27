import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";
import FormRegister from "../components/fragments/FormRegister.jsx";
import RegisterBackground from "../assets/daftar.jpeg";

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar" description="Selamat Datang" imageUrl="images/daftar.jpeg">
            <FormRegister/>
        </AuthLayout>
    );
};

export default RegisterPage