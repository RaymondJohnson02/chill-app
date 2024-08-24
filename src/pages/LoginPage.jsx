import React from "react";
import FormLogin from "../components/fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";
import LoginBackground from "../assets/masuk.jpeg";

const LoginPage = () => {
    return (
        <AuthLayout title="Masuk" description="Selamat Datang Kembali!" imageUrl={LoginBackground}>
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage