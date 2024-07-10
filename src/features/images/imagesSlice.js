import { createSlice} from '@reduxjs/toolkit'
import { imagesSearchThunk } from './imagesSearchThunk';

const randomImagesSlice = createSlice({
    name: 'images',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
        randomPhotos: [],
        search: false
    },
    reducers: {
        getRandomPhotosSlider(state, action){
            for(let i = 0; i <= 10; i+=2){
                state.randomPhotos.push(action.payload[i]);
            }
        },
        setSearch(state, action){
            state.search = action.payload
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
export const { getRandomPhotosSlider,setSearch } = randomImagesSlice.actions