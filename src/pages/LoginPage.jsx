import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";

const LoginPage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('assets/masuk.jpeg')] bg-center bg-cover bg-no-repeat">
            <AuthLayout title="Masuk" description="Selamat Datang Kembali!">
                <FormLogin/>
            </AuthLayout>
        </div>
    );
};

export default LoginPage