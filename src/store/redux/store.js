import { configureStore } from "@reduxjs/toolkit";
import myMovieReducer from "./slices/myMovieSlice";

const store = configureStore({
    reducer: { myMovie : myMovieReducer}
})

console.log("Initial state: ", store.getState());

store.subscribe(() => {
    console.log(store.getState());
}) 

export default store