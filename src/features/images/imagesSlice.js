import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { fetchRandomImagesListThunk } from './imagesThunk';

const randomImagesSlice = createSlice({
    name: 'images',
    initialState: {
        isLoading: false,
        data: null,
        isRejected: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRandomImagesListThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRandomImagesListThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchRandomImagesListThunk.rejected, (state, action) => {
            state.isRejected = true;
            console.log("Error imageSlice: "+action.payload);
        });
    }
});

export default randomImagesSlice.reducer;