import { configureStore } from '@reduxjs/toolkit'
import imagesSlice from '../features/images/imagesSlice';
import styleContentImageSlice from '../features/style/styleContentImageSlice';
import imagesChangesSlice from '../features/images/imagesChangesSlice';

export const store = configureStore({
    reducer: {
        images: imagesSlice,
        styleImages: styleContentImageSlice,
        imageChange: imagesChangesSlice
    }
});