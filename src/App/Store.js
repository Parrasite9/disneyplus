import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/Users/userSlice'
import movieReducer from '../Features/Movie/movieSlice'
export default configureStore ({
    // reducer: rootReducer,
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})