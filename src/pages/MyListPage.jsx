import React from "react";
import { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import MovieCardVerticalSmall from "../components/elements/MovieCardVerticalSmall";
import { useMovies } from "../components/context/Movie";
import { getMovies } from "../services/movies.services";
import LoadingPage from "./LoadingPage";

const MyListPage = () => {
    const [ movieList, setMovieList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { myMovies, myListLoading, removeFromMyList } = useMovies();

    useEffect(() => {
        getMovies().then((response) => {
            setMovieList(response);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    const handleRemoveFromMyList = (id) => {
        removeFromMyList(id);
    }

    if(loading || myListLoading) {
        return (
            <LoadingPage/>
        )
    }

    return (
        <HomeLayout>
            <div className={`min-h-screen bg-[#181A1C] p-5`}>
                <div className="h-full flex flex-col w-full p-5">
                    <div className="text-3xl text-white mb-8">Daftar Saya</div>
                    <div className="flex w-full flex-wrap mb-8">
                        {myMovies.map((usermovie, index) => {
                            const movie = movieList.find((m) => m.id === usermovie.movieId);
                            return (
                                <MovieCardVerticalSmall imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} key={movie.id} onRemoveFromMyList={() => handleRemoveFromMyList(usermovie.id)}/>
                            )
                        })}
                    </div>
                </div>
            </div>

        </HomeLayout>
        
    );
};

export default MyListPage