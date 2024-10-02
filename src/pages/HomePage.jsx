import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import HomeBanner from "../components/fragments/HomeBanner";
import MovieCarousel from "../components/elements/MovieCarousel";
import MovieCardHorizontal from "../components/elements/MovieCardHorizontal";
import MovieCardVertical from "../components/elements/MovieCardVertical";
import { useMovies } from "../components/context/Movie";

const HomePage = () => {
    const { myMovies, addToMyList, removeFromMyList } = useMovies();

    const handleAddMyList = (index) => {
        addToMyList(index);
    }

    const handleRemoveFromMyList = (index) => {
        removeFromMyList(index);
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
                    {myMovies.map((movie, index) => (
                        (movie.watched) && (
                            <MovieCardHorizontal key={movie.id} imageUrl={movie.himageUrl} title={movie.title} rating={movie.rating} favorite={movie.favorite} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)} />
                        )
                    ))}
                </MovieCarousel>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <MovieCarousel>
                    {myMovies.map((movie, index) => (
                        (movie.rating >= 4.5) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={movie.favorite} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    ))}
                </MovieCarousel>
                
                <div className="text-2xl text-white">Film Trending</div>
                <MovieCarousel>
                    {myMovies.map((movie, index) => (
                        (movie.trending) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={movie.favorite} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    ))}
                </MovieCarousel>

                <div className="text-2xl text-white">Rilis Baru</div>
                <MovieCarousel>
                    {myMovies.map((movie, index) => (
                        (movie.release >= 2024) && (
                            <MovieCardVertical key={movie.id} imageUrl={movie.vimageUrl} title={movie.title} rating={movie.rating} favorite={movie.favorite} onAddToMyList={() => handleAddMyList(index)} onRemoveFromMyList={() => handleRemoveFromMyList(index)}/>
                        )
                    ))}
                </MovieCarousel>
            </div>
        </HomeLayout>
        
    );
};

export default HomePage