import React from "react";

const MovieCardHorizontal = (props) => {
    const { imageUrl, title, rating, favorite = false, onAddToMyList, onRemoveFromMyList, onPlay } = props;
    return(
        <div className="w-full md:w-1/4 flex-shrink-0">
            <div className={`group w-full h-72 md:h-40 flex flex-row bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute z-10 invisible group-hover:visible transition duration-150">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-md">
                            <div>
                            <button type="button" onClick={() => onPlay}><img src="/images/play-circle.png" alt="" /></button>
                            </div>
                            {
                                (favorite) ? (
                                    <div>
                                        <button type="button" onClick={() => onRemoveFromMyList()}><img src="/images/movie-added.png" className="w-12 h-12" alt="" /></button>
                                    </div>
                                ) : (
                                    <div>
                                        <button type="button" onClick={() => onAddToMyList()}><img src="/images/add-movie.png" className="w-12 h-12" alt="" /></button>
                                    </div>
                                )
                            }
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
        </div>
    )
}

export default MovieCardHorizontal