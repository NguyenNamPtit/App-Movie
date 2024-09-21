
import { createSlice } from "@reduxjs/toolkit";

export const overLaySlide = createSlice({
    name: "overlay",
    initialState: {
        showOverlay: false,
    },
    reducers: {
        setShowOverlay: (state, action) => {
            state.showOverlay = action.payload;
        }
    }
});

export const {
    setShowOverlay
} = overLaySlide.actions;

export default overLaySlide.reducer;
