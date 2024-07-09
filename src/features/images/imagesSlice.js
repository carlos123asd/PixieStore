import { createSlice} from '@reduxjs/toolkit'
import { fetchRandomImagesListThunk } from './imagesThunk';

const randomImagesSlice = createSlice({
    name: 'images',
    initialState: {
        status: 'idle',
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRandomImagesListThunk.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchRandomImagesListThunk.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchRandomImagesListThunk.rejected, (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default randomImagesSlice.reducer;