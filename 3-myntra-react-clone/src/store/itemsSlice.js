import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            return Array.isArray(action.payload) ? action.payload : []; // ✅ Ensures state remains an array
        }
    }
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
