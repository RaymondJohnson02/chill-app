import React from "react";

const MovieCarousel = (props) => {
    const { children} = props;
    return (
        <div className="relative">
            <div className="absolute -left-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                <a href="">
                    <img src="/images/arrow-left.png" alt="" />
                </a>
            </div>
            <div className="absolute -right-6 top-1/2 w-fit text-gray-300 flex justify-center items-center p-2 bg-[#2F3334] rounded-full">
                <a href="">
                    <img src="/images/arrow-right.png" alt="" />
                </a>
            </div>
            <div className="flex w-full flex-nowrap space-x-3 mb-8 overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default MovieCarousel
