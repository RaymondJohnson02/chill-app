import React from "react";

const MovieCardVertical = (props) => {
    const { imageUrl } = props;
    return(
        <a href="" className="w-1/3 md:w-1/5 flex-shrink-0">
            <div className={`w-full h-72 md:h-96 flex items-end justify-between bg-[url(${imageUrl})] bg-center bg-contain bg-no-repeat`}>
            </div>
        </a>
    )
}

export default MovieCardVertical