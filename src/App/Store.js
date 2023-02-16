import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/Users/userSlice'

export default configureStore ({
    // reducer: rootReducer,
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})