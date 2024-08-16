import React from "react";
import TextLink from "../elements/TextLink.jsx";

const HomeLayout = (props) => {
    const { children } = props;
    return (
        <div className="min-h-screen">
            <div className="flex justify-between items-center bg-[#181A1C] text-gray-300 p-4 md:p-5">
                <div className="w-1/2 flex items-center">
                    <img className="hidden w-20 mx-5 md:block" src="src\assets\Logo.png" alt="Logo Chill" />
                    <img className="w-15 mx-5 md:hidden" src="src\assets\movie-open.png" alt="Logo Chill" />
                    <a className="text-sm me-5 md:ms-5" href="#">Series</a>
                    <a className="text-sm me-5 md:ms-5" href="#">Film</a>
                    <a className="text-sm me-5 md:ms-5" href="#">Daftar Saya</a>
                </div>
                
                <div className="w-1/4 flex justify-end">
                    <a className="flex items-center" href="#">
                        <img className="me-3" src="src\assets\profile.png" alt="profile" />
                        <img className="me-3" src="src\assets\ArrowDown.png" alt="arrow down" />
                    </a>
                </div>
            </div>
            {children}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#181A1C] py-5 px-8">
                <div className="flex justify-between">
                    <img src="src\assets\Logo.png" alt="" />
                    <div className="hidden text-gray-300 md:block">@2023 Chill All Rights Reserved.</div>
                </div>
                <div className="w-full md:w-fit">
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-white font-bold">Genre</div>
                        <img className="block md:hidden" src="src\assets\ArrowRight.png" alt="" />
                    </div>
                    <div className="hidden md:block">
                        <div className="flex">
                            <div className="mr-5">
                                <TextLink>Aksi</TextLink>
                                <TextLink>Anak - anak</TextLink>
                                <TextLink>Anime</TextLink>
                                <TextLink>Britania</TextLink>
                            </div>
                            <div className="mr-5">
                                <TextLink>Drama</TextLink>
                                <TextLink>Fantasi Ilmiah & Fantasi</TextLink>
                                <TextLink>Kejahatan</TextLink>
                                <TextLink>KDrama</TextLink>
                            </div>
                            <div className="mr-5">
                                <TextLink>Komedi</TextLink>
                                <TextLink>Petualangan</TextLink>
                                <TextLink>Perang</TextLink>
                                <TextLink>Romantis</TextLink>
                            </div>
                            <div className="mr-5">
                                <TextLink>Sains & Alam</TextLink>
                                <TextLink>Thriller</TextLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end w-full md:w-fit">
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-white font-bold">Bantuan</div>
                        <img className="md:hidden" src="src\assets\ArrowRight.png" alt="" />
                    </div>
                    <div className="hidden md:block">
                        <TextLink TextLink>FAQ</TextLink>
                        <TextLink>Kontak Kami</TextLink>
                        <TextLink>Privasi</TextLink>
                        <TextLink>Syarat & Ketentuan</TextLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLayout