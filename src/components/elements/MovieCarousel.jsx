import React from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";

const MovieCarousel = (props) => {
    const { children} = props;
    return (
        <div className="relative">
            <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                <a href="">
                    <img src={ArrowLeft} alt="" />
                </a>
            </div>
            <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                <a href="">
                    <img src={ArrowRight} alt="" />
                </a>
            </div>
            <div className="flex w-full flex-nowrap space-x-3 mb-8">
                {children}
            </div>
        </div>
    )
}

export default MovieCarousel
