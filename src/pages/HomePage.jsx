import React from "react";
import TextLink from "../components/elements/TextLink";
import Button from "../components/elements/Button";
const HomePage = () => {
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
            <div className="h-80 bg-[url(assets\banner.jpg)] md:h-screen bg-center bg-cover bg-no-repeat p-5">
                <div className="h-full flex flex-col justify-end w-full p-5">
                    <div className="text-3xl text-white mb-3">Duty After School</div>
                    <div className="text-gray-300 line-clamp-2 md:line-clamp-4 md:w-1/2">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</div>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-2">
                            <Button color="blue-500" width="20">Mulai</Button>
                            <Button color="slate-500" width="fit" imageUrl="src\assets\information-outline.png">Selengkapnya</Button>
                            <div className="text-gray-300 flex justify-center items-center p-2 border border-gray-200 rounded-full">18+</div>
                        </div>
                        <div className="text-gray-300 flex justify-center items-center p-2 border border-gray-200 rounded-full">
                            <a href="">
                                <img src="src\assets\volume-off.png" alt="" />
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="bg-[#181A1C] bg-cover bg-no-repeat p-10">
                <div className="text-2xl text-white w-full mb-3">Melanjutkan Tonton Film</div>
                    <div className="relative">
                        <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-left.png" alt="" />
                            </a>
                        </div>
                        <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-right.png" alt="" />
                            </a>
                        </div>
                        <div className="flex w-full flex-nowrap space-x-3 mb-8">
                        <a href="" className="w-full md:w-1/4 flex-shrink-0">
                            <div className="w-full h-72 md:h-40 flex items-end justify-between bg-[url('assets/vmovie1.png')] bg-center bg-contain bg-no-repeat">
                                <div className="text-white text-xl mx-5 my-16 md:my-5">Dont Look Up</div>
                                <div className="text-white text-xl mx-5 my-16 md:my-5">4.5/5</div>
                            </div>
                        </a>
                        <a href="" className="w-full md:w-1/4 flex-shrink-0">
                            <div className="w-full h-72 md:h-40 flex items-end justify-between bg-[url('assets/vmovie1.png')] bg-center bg-contain bg-no-repeat">
                                <div className="text-white text-xl mx-5 my-16 md:my-5">Dont Look Up</div>
                                <div className="text-white text-xl mx-5 my-16 md:my-5">4.5/5</div>
                            </div>
                        </a>
                        <a href="" className="w-full md:w-1/4 flex-shrink-0">
                            <div className="w-full h-72 md:h-40 flex items-end justify-between bg-[url('assets/vmovie1.png')] bg-center bg-contain bg-no-repeat">
                                <div className="text-white text-xl mx-5 my-16 md:my-5">Dont Look Up</div>
                                <div className="text-white text-xl mx-5 my-16 md:my-5">4.5/5</div>
                            </div>
                        </a>
                        <a href="" className="w-full md:w-1/4 flex-shrink-0">
                            <div className="w-full h-72 md:h-40 flex items-end justify-between bg-[url('assets/vmovie1.png')] bg-center bg-contain bg-no-repeat">
                                <div className="text-white text-xl mx-5 my-16 md:my-5">Dont Look Up</div>
                                <div className="text-white text-xl mx-5 my-16 md:my-5">4.5/5</div>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <div className="relative">
                        <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-left.png" alt="" />
                            </a>
                        </div>
                        <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-right.png" alt="" />
                            </a>
                        </div>
                        <div className="flex w-full flex-nowrap space-x-2 mb-8">
                            <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                                <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                                </div>
                            </a>
                            <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                                <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                                </div>
                            </a>
                            <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                                <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                                </div>
                            </a>
                            <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                                <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                                </div>
                            </a>
                            <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                                <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                                </div>
                            </a>
                        </div>
                    </div>
                <div className="text-2xl text-white">Film Trending</div>
                <div className="relative">
                        <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-left.png" alt="" />
                            </a>
                        </div>
                        <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                            <a href="">
                                <img src="src\assets\arrow-right.png" alt="" />
                            </a>
                        </div>
                    <div className="flex w-full flex-nowrap space-x-2 mb-8">
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text-2xl text-white">Rilis Baru</div>
                <div className="relative">
                    <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                        <a href="">
                            <img src="src\assets\arrow-left.png" alt="" />
                        </a>
                    </div>
                    <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                        <a href="">
                            <img src="src\assets\arrow-right.png" alt="" />
                        </a>
                    </div>
                    <div className="flex w-full flex-nowrap space-x-2 mb-8">
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
                            <div className="w-full h-72 md:h-96 flex items-end justify-between bg-[url('assets/hmovie1.png')] bg-center bg-contain bg-no-repeat">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
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
};

export default HomePage