import { createSlice } from "@reduxjs/toolkit";

const myMovieSlice = createSlice({
    name: "myMovie",
    initialState : {
        data : []
    },
    reducers : {
        setMyMovies : (state, action) =>{
            state.data = action.payload
        },
        addToMyMovies : (state, action) =>{
            state.data.push(action.payload)
        },
        removeFromMyMovies : (state, action) =>{
            state.data = state.data.filter((movie) => movie.id !== action.payload)
        }
    }

});

export const {setMyMovies,addToMyMovies, removeFromMyMovies} = myMovieSlice.actions;
export default myMovieSlice.reducer;