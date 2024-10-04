import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
export const getUserMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/usermovies`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const addUserMovies = async (data) => {
    try {
        const response = await axios.post(`${apiUrl}/usermovies`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const updateUserMovies = async (data) => {
    try {
        const response = await axios.put(`${apiUrl}/usermovies/${data.id}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const deleteUserMovies = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/usermovies/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

