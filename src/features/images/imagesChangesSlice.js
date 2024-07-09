import { createSlice } from "@reduxjs/toolkit";

const imagesChangesSlice = createSlice({
    name: 'imageChange',
    initialState: {
        lengthlocal: localStorage.length,
    },
    reducers: {
        changeValueLengthLocal(state, action){
            state.lengthlocal = action.payload
        }
    }
});

export default imagesChangesSlice.reducer
export const { changeValueLengthLocal } = imagesChangesSlice.actions