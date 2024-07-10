import { createSlice } from "@reduxjs/toolkit";

const imageSelectedSlice = createSlice({
    name: 'imageSelected',
    initialState: {
        data: null
    },
    reducers: {
        addSelectData(state, action){
            state.data = action.payload;
        }
    }
});

export default imageSelectedSlice.reducer
export const { addSelectData } =  imageSelectedSlice.actions