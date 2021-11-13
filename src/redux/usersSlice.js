import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: "users",
    initialState:{
        name: [],
        pending: false,
        error:false
    },
    reducers:{
            fetchStart: (state) => {
               state.pending = true;
             },
            fetchSuccess: (state, action) => {
               state.pending = false;
               state.name = action.payload;
             },
            fetchFailure: (state) => {
               state.pending = false;
               state.error = true;
             },
    }
});

export const { fetchStart, fetchSuccess, fetchFailure } =usersSlice.actions;

export default usersSlice.reducer;