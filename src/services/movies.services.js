import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/movies`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

