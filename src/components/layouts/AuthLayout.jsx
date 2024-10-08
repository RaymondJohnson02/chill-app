import React, { Children } from "react";

const AuthLayout = (props) => {
    const { children, title, description, imageUrl } = props;
    return (
        <div className={`flex justify-center min-h-screen items-center bg-center bg-cover bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="w-4/5 bg-[#181A1C] p-5 rounded-md md:w-1/3">
                <div className='flex justify-center my-3'><img src="/images/Logo.png" alt="Chill Logo" /></div>
                <div className="flex justify-center text-3xl text-white">{title}</div>
                <div className="flex justify-center text-white mb-6">{description}</div>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout