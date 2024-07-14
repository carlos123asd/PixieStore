import { createSlice} from '@reduxjs/toolkit'
import { imagesSearchThunk } from './imagesSearchThunk';

const randomImagesSlice = createSlice({
    name: 'images',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
        randomPhotos: []
    },
    reducers: {
        getRandomPhotosSlider(state, action){
            state.randomPhotos = action.payload;
        },
        updatePagination(state,action){
            state.pagination.total = action.payload[0]
            state.pagination.page = action.payload[1]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(imagesSearchThunk.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(imagesSearchThunk.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(imagesSearchThunk.rejected, (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default randomImagesSlice.reducer;
export const { getRandomPhotosSlider,updatePagination } = randomImagesSlice.actions