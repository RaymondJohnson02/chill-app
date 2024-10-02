import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }) => {
    
    const [myMovies, setMyMovies] = useState(() => {
        const savedMovies = localStorage.getItem('myMovies');
        return savedMovies ? JSON.parse(savedMovies) : [
            {
                id: 1,
                vimageUrl: "/images/vmovie1.png",
                himageUrl: "/images/hmovie1.png",
                title: "My Perfect Stranger",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 2,
                vimageUrl: "/images/vmovie2.png",
                himageUrl: "/images/hmovie2.png",
                title: "Shazam",
                rating: 4.7,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false

            },
            {
                id: 3,
                vimageUrl: "/images/vmovie3.png",
                himageUrl: "/images/hmovie3.png",
                title: "Avatar",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2020,
                favorite: false
            },
            {
                id: 4,
                vimageUrl: "/images/vmovie4.png",
                himageUrl: "/images/hmovie4.png",
                title: "Fast X",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 5,
                vimageUrl: "/images/vmovie5.png",
                himageUrl: "/images/hmovie5.png",
                title: "Blue Lock",
                rating: 4.2,
                watched: true,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 6,
                vimageUrl: "/images/vmovie6.png",
                himageUrl: "/images/hmovie6.png",
                title: "Little Mermaid",
                rating: 4.2,
                watched: false,
                trending: true,
                release: 2024,
                favorite: false
            },
            {
                id: 7,
                vimageUrl: "/images/vmovie7.png",
                himageUrl: "/images/hmovie7.png",
                title: "The Tomorrow War",
                rating: 4.2,
                watched: false,
                trending: true,
                release: 2023,
                favorite: false
            },
            {
                id: 8,
                vimageUrl: "/images/vmovie8.png",
                himageUrl: "/images/hmovie8.png",
                title: "Batman",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 9,
                vimageUrl: "/images/vmovie9.png",
                himageUrl: "/images/hmovie9.png",
                title: "All of us are dead",
                rating: 4.7,
                watched: true,
                trending: false,
                release: 2024,
                favorite: false
            },
            {
                id: 10,
                vimageUrl: "/images/vmovie10.png",
                himageUrl: "/images/hmovie10.png",
                title: "The man called otto",
                rating: 4.2,
                watched: true,
                trending: true,
                release: 2023,
                favorite: false
            },
            {
                id: 11,
                vimageUrl: "/images/vmovie11.png",
                himageUrl: "/images/hmovie11.png",
                title: "Alice",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 12,
                vimageUrl: "/images/vmovie12.png",
                himageUrl: "/images/hmovie12.png",
                title: "Big Hero 6",
                rating: 4.6,
                watched: false,
                trending: false,
                release: 2024,
                favorite: false
            },
            {
                id: 13,
                vimageUrl: "/images/vmovie13.png",
                himageUrl: "/images/hmovie13.png",
                title: "Missing Piece",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2024,
                favorite: false
            },
            {
                id: 14,
                vimageUrl: "/images/vmovie14.png",
                himageUrl: "/images/hmovie14.png",
                title: "Suzume",
                rating: 4.5,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 15,
                vimageUrl: "/images/vmovie15.png",
                himageUrl: "/images/hmovie15.png",
                title: "Megan",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 16,
                vimageUrl: "/images/vmovie16.png",
                himageUrl: "/images/hmovie16.png",
                title: "Ant Man Quantumania",
                rating: 4.2,
                watched: false,
                trending: true,
                release: 2023,
                favorite: false
            },
            {
                id: 17,
                vimageUrl: "/images/vmovie17.png",
                himageUrl: "/images/hmovie17.png",
                title: "Duty After School",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2024,
                favorite: false
            },
            {
                id: 18,
                vimageUrl: "/images/vmovie18.png",
                himageUrl: "/images/hmovie18.png",
                title: "Hero Academia",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 19,
                vimageUrl: "/images/vmovie19.png",
                himageUrl: "/images/hmovie19.png",
                title: "Doctor Strange",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 20,
                vimageUrl: "/images/vmovie20.png",
                himageUrl: "/images/hmovie20.png",
                title: "Dont look up",
                rating: 4.2,
                watched: true,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 21,
                vimageUrl: "/images/vmovie21.png",
                himageUrl: "/images/hmovie21.png",
                title: "Black Adam",
                rating: 4.2,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 25,
                vimageUrl: "/images/vmovie25.png",
                himageUrl: "/images/hmovie25.png",
                title: "Jurrasic World Dominion",
                rating: 4.6,
                watched: false,
                trending: false,
                release: 2023,
                favorite: false
            },
            {
                id: 32,
                vimageUrl: "/images/vmovie32.png",
                himageUrl: "/images/hmovie32.png",
                title: "Guardian Of The Galaxy",
                rating: 4.2,
                watched: false,
                trending: true,
                release: 2023,
                favorite: false
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem('myMovies', JSON.stringify(myMovies));
        console.log("Movies saved to localStorage:", myMovies);
    }, [myMovies]);

    const addToMyList = (index) => {
        const movies = [...myMovies];
        movies[index].favorite = true;
        setMyMovies(movies);
    }

    const removeFromMyList = (index) => {
        const movies = [...myMovies];
        movies[index].favorite = false;
        setMyMovies(movies);
    }

    return (
        <MovieContext.Provider value={{ myMovies, addToMyList, removeFromMyList }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider


