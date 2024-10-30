import React from "react";
import { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import MovieCardVerticalSmall from "../components/elements/MovieCardVerticalSmall";
import { getMovies } from "../services/movies.services";
import LoadingPage from "./LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { setMyMovies, removeFromMyMovies } from "../store/redux/slices/myMovieSlice";
import { getUserMovies, deleteUserMovies } from "../services/usermovies.services";

const MyListPage = () => {

    const [ movieList, setMovieList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const myMovies = useSelector((state) => state.myMovie.data);

    useEffect(() => {
        getMovies().then((response) => {
            setMovieList(response);
        }).finally(() => {
            setLoading(false);
        });

        setLoading(true);

        getUserMovies().then((response) => {
            dispatch(setMyMovies(response));
        }).finally(() => {
            setLoading(false);
        });
    }, [dispatch]);

    const handleRemoveFromMyList = (id) => {
        deleteUserMovies(id).then((response) => {
            if(response.status === 200) {
                dispatch(removeFromMyMovies(id));
                console.log("Delete from my list success");
            } else {
                console.log("Delete from my list failed");
            }
        });
    }

    if(loading) {
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
                            const movie = movieList.find((movie) => movie.id === usermovie.movieId);
                            return (
                                <MovieCardVerticalSmall title={movie.title} imageUrl={movie.vimageUrl}  rating={movie.rating} key={movie.id} onRemoveFromMyList={() => handleRemoveFromMyList(usermovie.id)}/>
                            )
                        })}
                    </div>
                </div>
            </div>

        </HomeLayout>
        
    );
};

export default MyListPage