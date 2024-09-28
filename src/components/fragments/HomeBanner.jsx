import React from "react";
import Button from "../elements/Button";

const HomeBanner = (props) => {
    const { movieTitle, movieDescription, ageLimit, imageUrl } = props;
    return (
        <div className={`h-80 md:h-screen bg-center bg-cover bg-no-repeat p-5`} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="h-full flex flex-col justify-end w-full p-5">
                <div className="text-3xl text-white mb-3">{movieTitle}</div>
                <div className="text-gray-300 line-clamp-2 md:line-clamp-4 md:w-1/2">{movieDescription}</div>
                <div className="flex justify-between mt-5">
                    <div className="flex gap-2">
                        <Button bgColor="bg-blue-500" width="20">Mulai</Button>
                        <Button bgColor="bg-slate-500" width="fit" imageUrl="/images/information-outline.png">Selengkapnya</Button>
                        <div className="text-gray-300 flex justify-center items-center p-2 border border-gray-200 rounded-full">{ageLimit}+</div>
                    </div>
                    <div className="text-gray-300 flex justify-center items-center p-2 border border-gray-200 rounded-full">
                        <a href="">
                            <img src="/images/volume-off.png" alt="" />
                        </a>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default HomeBanner