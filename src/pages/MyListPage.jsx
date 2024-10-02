import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import MovieCardVerticalSmall from "../components/elements/MovieCardVerticalSmall";
import { useMovies } from "../components/context/Movie";

const MyListPage = () => {
    const { myMovies, removeFromMyList } = useMovies();
    return (
        <HomeLayout>
            <div className={`min-h-screen bg-[#181A1C] p-5`}>
                <div className="h-full flex flex-col w-full p-5">
                    <div className="text-3xl text-white mb-8">Daftar Saya</div>
                    <div className="flex w-full flex-wrap mb-8">
                        {myMovies.map((movie, index) => (
                            (movie.favorite) && (
                                <MovieCardVerticalSmall imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} key={movie.id} onRemoveFromMyList={() => removeFromMyList(index)}/>
                                
                            )
                        ))}
                    </div>
                </div>
            </div>

        </HomeLayout>
        
    );
};

export default MyListPage