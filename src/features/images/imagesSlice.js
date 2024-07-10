import { createSlice} from '@reduxjs/toolkit'
import { fetchRandomImagesListThunk } from './imagesThunk';

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
            for(let i = 0; i <= 10; i+=2){
                state.randomPhotos.push(action.payload[i]);
            }
        }
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
export const { getRandomPhotosSlider } = randomImagesSlice.actions