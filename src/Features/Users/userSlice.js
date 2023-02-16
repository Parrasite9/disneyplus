// THIS IS A REDUX BOILER PLATE AND YOU CAN NOW HAVE ACCESS TO THE DATA HERE. 
// THE DATA EXPORTED CAN BE ACCESSED AT ANY PAGE 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // START THE SITE WITH BLANK DATA
    name: "",
    email: "",
    photo: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            // WHEN THE USER LOGS IN, REMEMBER THIS DATA 
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },

        setSignOutState: state => {
            // WHEN USER LOGS IN, FORGET ALL THE DATA 
            state.name = null
            state.email = null
            state.photo = null 
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name 
export const selectUserEmail = (state) => state.user.email 
export const selectUserPhoto = (state) => state.user.photo 

export default userSlice.reducer 