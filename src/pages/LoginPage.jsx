import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";

const LoginPage = () => {
    return (
        <AuthLayout title="Masuk" description="Selamat Datang Kembali!" imageUrl="/images/masuk.jpeg">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage