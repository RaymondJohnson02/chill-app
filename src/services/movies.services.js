import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/movies`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

