import { configureStore } from '@reduxjs/toolkit'
import imagesSlice from '../features/images/imagesSlice';
import styleContentImageSlice from '../features/style/styleContentImageSlice';
import imagesChangesSlice from '../features/images/imagesChangesSlice';
import imageSelectedSlice from '../features/imageSelected/imageSelectedSlice';
import selectSlice from '../features/select/selectSlice';

export const store = configureStore({
    reducer: {
        images: imagesSlice,
        styleImages: styleContentImageSlice,
        imageChange: imagesChangesSlice,
        imageSelected: imageSelectedSlice,
        select: selectSlice
    }
});