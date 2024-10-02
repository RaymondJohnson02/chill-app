import React from "react";

const MovieCardVertical = (props) => {
    const { imageUrl, onAddToMyList, onRemoveFromMyList, favorite = false, onPlay } = props;
    return(
        <div className="w-1/3 md:w-1/5 flex-shrink-0">
            <div className={`group/vmovie w-full h-72 md:h-96 flex items-end justify-between bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute invisible group-hover/vmovie:visible transition duration-150">
                        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
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
                </div>
            </div>
        </div>
    )
}

export default MovieCardVertical