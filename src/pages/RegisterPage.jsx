import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";
import FormRegister from "../components/fragments/FormRegister.jsx";

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar" description="Selamat Datang" imageUrl="assets/daftar.jpeg">
            <FormRegister/>
        </AuthLayout>
    );
};

export default RegisterPage