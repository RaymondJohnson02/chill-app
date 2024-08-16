import React from "react";
import MovieCarousel from "../elements/MovieCarousel";
import MovieCardHorizontal from "../elements/MovieCardHorizontal";
import MovieCardVertical from "../elements/MovieCardVertical";

const HomeCarousel = () => {
    return (
        <div className="bg-[#181A1C] bg-cover bg-no-repeat p-10">
                <div className="text-2xl text-white w-full mb-3">Melanjutkan Tonton Film</div>
                
                <MovieCarousel>
                    <MovieCardHorizontal imageUrl="assets/hmovie1.png" title="Dont Look Up" rating="4.5"/>
                    <MovieCardHorizontal imageUrl="assets/hmovie2.png" title="All of Us Are Dead" rating="4.25"/>
                    <MovieCardHorizontal imageUrl="assets/hmovie3.png" title="Blue Lock" rating="4.6"/>
                    <MovieCardHorizontal imageUrl="assets/hmovie4.png" title="The Man Called Otto" rating="4.4"/>
                    <MovieCardHorizontal imageUrl="assets/hmovie1.png" title="Dont Look Up" rating="4.5"/>
                </MovieCarousel>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl="assets/vmovie1.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie2.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie3.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie4.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie5.png"/>
                </MovieCarousel>
                
                <div className="text-2xl text-white">Film Trending</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl="assets/vmovie6.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie7.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie8.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie9.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie10.png"/>
                </MovieCarousel>

                <div className="text-2xl text-white">Rilis Baru</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl="assets/vmovie10.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie11.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie5.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie4.png"/>
                    <MovieCardVertical imageUrl="assets/vmovie13.png"/>
                </MovieCarousel>

            </div>
    )
}

export default HomeCarousel