import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,  // PENDING: false, DONE: true
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;  // ✅ No return statement
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true; // ✅ No return statement
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false; // ✅ No return statement
        },
    }
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
