import React, { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import HomeBanner from "../components/fragments/HomeBanner";
import MovieCarousel from "../components/elements/MovieCarousel";
import MovieCardHorizontal from "../components/elements/MovieCardHorizontal";
import MovieCardVertical from "../components/elements/MovieCardVertical";
import { useMovies } from "../components/context/Movie";
import {getMovies} from "../services/movies.services";
import LoadingPage from "./LoadingPage";

const HomePage = () => {

    const [ movieList, setMovieList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { myMovies, myListLoading, addToMyList, removeFromMyList } = useMovies();

    useEffect(() => {
        getMovies().then((response) => {
            setMovieList(response);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    const handleAddMyList = (index) => {
        let movie = movieList[index];
        let data = {
            userId: 1,
            movieId: movie.id,
            watched: false
        }

        let movieAdded = myMovies.find((m) => m.movieId === movie.id && m.userId === 1);
        if(movieAdded) {
            console.log("Already added");
            return;
        }else{
            addToMyList(data);
        }
    }

    const handleRemoveFromMyList = (index) => {
        let movie = movieList[index];
        let movieToBeDeleted = myMovies.find((m) => m.movieId === movie.id && m.userId === 1);
        if(movieToBeDeleted) {
            removeFromMyList(movieToBeDeleted.id);
        }else{
            console.log("This movie is not in my list");
            return;
        }
    }

    if(loading || myListLoading) {
        return (
            <LoadingPage/>
        )
    }

    return (
        <HomeLayout>
            <HomeBanner 
                movieTitle="Duty After School" 
                movieDescription="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
                imageUrl="/images/banner.jpg"
                ageLimit="18">
            </HomeBanner>
            <div className="bg-[#181A1C] bg-cover bg-no-repeat p-10">
                <div className="text-2xl text-white w-full mb-3">Melanjutkan Tonton Film</div>
                
                <MovieCarousel>
                    {movieList.map((movie, index) => {
                        const isOnMyList = myMovies.find((myMovie) => myMovie.movieId == movie.id) != undefined;
                        return (
                            <MovieCardHorizontal key={movie.id} imageUrl={movie.himageUrl} title={movie.title} rating={movie.rating} favorite={isOnMyList} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)} />
                        )
                    
                    })}
                </MovieCarousel>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <MovieCarousel>
                    {movieList.map((movie, index) => {
                        const isOnMyList = myMovies.find((myMovie) => myMovie.movieId == movie.id) != undefined;
                        return (movie.rating >= 4.5) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={isOnMyList} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    })}
                </MovieCarousel>
                
                <div className="text-2xl text-white">Film Trending</div>
                <MovieCarousel>
                    {movieList.map((movie, index) => {
                        const isOnMyList = myMovies.find((myMovie) => myMovie.movieId == movie.id) != undefined;
                        return (movie.trending) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={isOnMyList} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    })}
                </MovieCarousel>

                <div className="text-2xl text-white">Rilis Baru</div>
                <MovieCarousel>
                    {movieList.map((movie, index) => {
                        const isOnMyList = myMovies.find((myMovie) => myMovie.movieId == movie.id) != undefined;
                        return (movie.release >= 2024) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={isOnMyList} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    })}
                </MovieCarousel>
            </div>
        </HomeLayout>
        
    );
};

export default HomePage