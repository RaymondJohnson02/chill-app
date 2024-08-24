import React from "react";
import MovieCarousel from "../elements/MovieCarousel";
import MovieCardHorizontal from "../elements/MovieCardHorizontal";
import MovieCardVertical from "../elements/MovieCardVertical";
import HMovie1 from "../../assets/hmovie1.png";
import HMovie2 from "../../assets/hmovie2.png";
import HMovie3 from "../../assets/hmovie3.png";
import HMovie4 from "../../assets/hmovie4.png";
import VMovie1 from "../../assets/vmovie1.png";
import VMovie2 from "../../assets/vmovie2.png";
import VMovie3 from "../../assets/vmovie3.png";
import VMovie4 from "../../assets/vmovie4.png";
import VMovie5 from "../../assets/vmovie5.png";
import VMovie6 from "../../assets/vmovie6.png";
import VMovie7 from "../../assets/vmovie7.png";
import VMovie8 from "../../assets/vmovie8.png";
import VMovie9 from "../../assets/vmovie9.png";
import VMovie10 from "../../assets/vmovie10.png";
import VMovie11 from "../../assets/vmovie11.png";
import VMovie12 from "../../assets/vmovie12.png";
import VMovie13 from "../../assets/vmovie13.png";

const HomeCarousel = () => {
    return (
        <div className="bg-[#181A1C] bg-cover bg-no-repeat p-10">
                <div className="text-2xl text-white w-full mb-3">Melanjutkan Tonton Film</div>
                
                <MovieCarousel>
                    <MovieCardHorizontal imageUrl={HMovie1} title="Dont Look Up" rating="4.5"/>
                    <MovieCardHorizontal imageUrl={HMovie2} title="All of Us Are Dead" rating="4.25"/>
                    <MovieCardHorizontal imageUrl={HMovie3} title="Blue Lock" rating="4.6"/>
                    <MovieCardHorizontal imageUrl={HMovie4} title="The Man Called Otto" rating="4.4"/>
                    <MovieCardHorizontal imageUrl={HMovie1} title="Dont Look Up" rating="4.5"/>
                </MovieCarousel>
                
                <div className="text-2xl text-white mb-3">Top Rating Film dan Series Hari ini</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl={VMovie1}/>
                    <MovieCardVertical imageUrl={VMovie2}/>
                    <MovieCardVertical imageUrl={VMovie3}/>
                    <MovieCardVertical imageUrl={VMovie4}/>
                    <MovieCardVertical imageUrl={VMovie5}/>
                </MovieCarousel>
                
                <div className="text-2xl text-white">Film Trending</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl={VMovie6}/>
                    <MovieCardVertical imageUrl={VMovie7}/>
                    <MovieCardVertical imageUrl={VMovie8}/>
                    <MovieCardVertical imageUrl={VMovie9}/>
                    <MovieCardVertical imageUrl={VMovie10}/>
                </MovieCarousel>

                <div className="text-2xl text-white">Rilis Baru</div>
                <MovieCarousel>
                    <MovieCardVertical imageUrl={VMovie10}/>
                    <MovieCardVertical imageUrl={VMovie11}/>
                    <MovieCardVertical imageUrl={VMovie5}/>
                    <MovieCardVertical imageUrl={VMovie4}/>
                    <MovieCardVertical imageUrl={VMovie13}/>
                </MovieCarousel>

            </div>
    )
}

export default HomeCarousel