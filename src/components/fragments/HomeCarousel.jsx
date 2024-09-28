import React from "react";
import MovieCarousel from "../elements/MovieCarousel";
import MovieCardHorizontal from "../elements/MovieCardHorizontal";
import MovieCardVertical from "../elements/MovieCardVertical";

const watchedMovies = [
    {
        id: 1,
        imageUrl: "/images/hmovie1.png",
        title: "Dont Look Up",
        rating: "4.5"
    },
    {
        id: 2,
        imageUrl: "/images/hmovie2.png",
        title: "All of Us Are Dead",
        rating: "4.25"
    },
    {
        id: 3,
        imageUrl: "/images/hmovie3.png",
        title: "Blue Lock",
        rating: "4.6"
    },
    {
        id: 4,
        imageUrl: "/images/hmovie4.png",
        title: "The Man Called Otto",
        rating: "4.4"
    },
    {
        id: 5,
        imageUrl: "/images/hmovie1.png",
        title: "Dont Look Up",
        rating: "4.5"
    },
]

const topMoviesSeries = [
    {
        id: 1,
        imageUrl: "/images/vmovie1.png",
        title: "Suzume",
        rating: "4.5"
    },
    {
        id: 2,
        imageUrl: "/images/vmovie2.png",
        title: "Jurassic world : dominion",
        rating: "4.25"
    },
    {
        id: 3,
        imageUrl: "/images/vmovie3.png",
        title: "Sonic : the hedgehog",
        rating: "4.6"
    },
    {
        id: 4,
        imageUrl: "/images/vmovie4.png",
        title: "All of us are dead",
        rating: "4.4"
    }
]

const trendings = [
    {
        id: 1,
        imageUrl: "/images/vmovie6.png",
        title: "The tomorrow war",
        rating: "4.5"
    },
    {
        id: 2,
        imageUrl: "/images/vmovie7.png",
        title: "Ant man and the wasp quantumania",
        rating: "4.25"
    },
    {
        id: 3,
        imageUrl: "/images/vmovie8.png",
        title: "Guardian of the galaxy vol 3",
        rating: "4.6"
    },
    {
        id: 4,
        imageUrl: "/images/vmovie9.png",
        title: "A man called otto",
        rating: "4.4"
    },
    {
        id: 5,
        imageUrl: "/images/vmovie10.png",
        title: "The little mermaid",
        rating: "4.5"
    }
]

const newReleases = [
    {
        id: 1,
        imageUrl: "/images/vmovie10.png",
        title: "The little mermaid",
        rating: "4.5"
    },
    {
        id: 2,
        imageUrl: "/images/vmovie11.png",
        title: "Duty after school",
        rating: "4.25"
    },
    {
        id: 3,
        imageUrl: "/images/vmovie5.png",
        title: "Big hero 6",
        rating: "4.6"
    },
    {
        id: 4,
        imageUrl: "/images/vmovie4.png",
        title: "All of us are dead",
        rating: "4.4"
    },
    {
        id: 5,
        imageUrl: "/images/vmovie13.png",
        title: "Missing",
        rating: "4.5"
    }
]

const HomeCarousel = () => {
    return (
        <div className="bg-[#181A1C] bg-cover bg-no-repeat p-10">
                <div className="text-2xl text-white w-full mb-3">Melanjutkan Tonton Film</div>
                
                <MovieCarousel>
                    {watchedMovies.map((movie) => {
                        <MovieCardHorizontal imageUrl={movie.imageUrl} title={movie.title} rating={movie.rating}/>
                    })}
                </MovieCarousel>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <MovieCarousel>
                    {topMoviesSeries.map((movie) => {
                        <MovieCardVertical imageUrl={movie.imageUrl} title={movie.title} rating={movie.rating}/>
                    })}
                </MovieCarousel>
                
                <div className="text-2xl text-white">Film Trending</div>
                <MovieCarousel>
                    {trendings.map((movie) => {
                        <MovieCardVertical imageUrl={movie.imageUrl} title={movie.title} rating={movie.rating}/>
                    })}
                </MovieCarousel>

                <div className="text-2xl text-white">Rilis Baru</div>
                <MovieCarousel>
                    {newReleases.map((movie) => {
                        <MovieCardHorizontal imageUrl={movie.imageUrl} title={movie.title} rating={movie.rating}/>
                    })}
                </MovieCarousel>
            </div>
    )
}

export default HomeCarousel