import React from "react";

const MovieCardVertical = (props) => {
    const { imageUrl } = props;
    return(
        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
            <div className={`group/vmovie w-full h-72 md:h-96 flex items-end justify-between bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute invisible group-hover/vmovie:visible transition duration-150">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                            <div>
                                <img src="/images/play-circle.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/add-movie.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default MovieCardVertical