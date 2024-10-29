import { createContext, useContext, useState, useEffect } from "react";
import { addUserMovies, getUserMovies, deleteUserMovies } from "../../services/usermovies.services";
import { HttpStatusCode } from "axios";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }) => {

    const [myMovies, setMyMovies] = useState([]);
    const [setMyListLoading] = useState(true);

    useEffect(() => {
        getUserMovies().then((response) => {
            setMyMovies(response);
        }).finally(() => {
            setMyListLoading(false);
        })
    }, []);

    const addToMyList = (data) => {
        addUserMovies(data).then((response) => {
            if (response.status === HttpStatusCode.Created) {
                console.log("Add to my list success");
                setMyMovies([...myMovies, response.data]);
            }else{
                console.log("Add to my list failed");
            }
        });
    }

    const removeFromMyList = (id) => {
        deleteUserMovies(id).then((response) => {
            if (response.status === HttpStatusCode.Ok) {
                console.log("Delete from my list success");
                setMyMovies(myMovies.filter((usermovie) => usermovie.id !== id));
            }else{
                console.log("Delete from my list failed");
            }
        });
    }

    return (
        <MovieContext.Provider value={{ myMovies, addToMyList, removeFromMyList }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider


