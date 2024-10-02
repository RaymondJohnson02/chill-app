import React from "react";

const MovieCardVerticalSmall = (props) => {
    const { imageUrl, onRemoveFromMyList } = props;
    return(
        <a href="" className="w-1/3 md:w-1/6 flex-shrink-0 mb-2">
            <div className={`group/vmovie w-full h-72 md:h-84 flex items-end justify-between bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute invisible group-hover/vmovie:visible transition duration-150">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                            <div>
                                <button type="button" onClick={() => onPlay}><img src="/images/play-circle.png" alt="" /></button>
                            </div>
                            <div>
                                <button type="button" onClick={() => onRemoveFromMyList()}><img src="/images/movie-added.png" className="w-12 h-12" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default MovieCardVerticalSmall