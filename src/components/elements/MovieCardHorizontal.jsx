import React from "react";

const MovieCardHorizontal = (props) => {
    const { imageUrl, title, rating } = props;
    return(
        <a href="" className="w-full md:w-1/4 flex-shrink-0">
        <div className={`w-full h-72 md:h-40 flex items-end justify-between bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="text-white text-xl mx-5 my-16 md:my-5">{title}</div>
                <div className="text-white text-xl mx-5 my-16 md:my-5">{rating}/5</div>
            </div>
        </a>
    )
}

export default MovieCardHorizontal