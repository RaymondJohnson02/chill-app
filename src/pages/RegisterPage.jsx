import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";
import FormRegister from "../components/fragments/FormRegister.jsx";

const RegisterPage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('assets/daftar.jpeg')] bg-center bg-cover bg-no-repeat">
            <AuthLayout title="Daftar" description="Selamat Datang">
                <FormRegister/>
            </AuthLayout>
        </div>
    );
};

export default RegisterPage