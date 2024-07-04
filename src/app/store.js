import { configureStore } from '@reduxjs/toolkit'
import { imageSlice } from '../features/images/imagesSlice';

export const store = configureStore({
    reducer: {
        images: imageSlice.reducer
    }
});