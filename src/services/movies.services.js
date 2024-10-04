import axios from "axios";

const apiUrl = "https://66fd1831c3a184a84d190eaa.mockapi.io/api";

export const getMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/movies`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

