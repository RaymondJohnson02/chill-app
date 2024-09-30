import React from "react";

const MovieCardHorizontal = (props) => {
    const { imageUrl, title, rating } = props;
    return(
        <a href="" className="w-full md:w-1/4 flex-shrink-0">
            <div className={`group/hmovie w-full h-72 md:h-40 flex flex-row bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute invisible group-hover/hmovie:visible transition duration-150">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                            <div>
                                <img src="/images/play-circle.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/add-movie.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full absolute">
                        <div className="w-full h-full flex justify-between items-end">
                            <div className="text-white text-xl mx-5 my-16 md:my-5">{title}</div>
                            <div className="text-white text-xl mx-5 my-16 md:my-5">{rating}/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default MovieCardHorizontal