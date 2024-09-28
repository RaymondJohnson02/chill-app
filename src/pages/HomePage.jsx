import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import HomeBanner from "../components/fragments/HomeBanner";
import HomeCarousel from "../components/fragments/HomeCarousel";

const HomePage = () => {
    return (
        <HomeLayout>
            <HomeBanner 
                movieTitle="Duty After School" 
                movieDescription="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
                imageUrl="/images/banner.jpg"
                ageLimit="18">
            </HomeBanner>
            <HomeCarousel/>
        </HomeLayout>
        
    );
};

export default HomePage