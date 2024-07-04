import { createSlice } from '@reduxjs/toolkit'
import { getRandomImagesListThunk } from './imagesThunk'

export const imageSlice = createSlice({
    name: 'images', // <- Apunta el error aqui
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getRandomImagesListThunk.pending,(state) => {
            state.status = 'pending'
        }).addCase(getRandomImagesListThunk.fulfilled,(state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        }).addCase(getRandomImagesListThunk.rejected,(state, action) => {
            state.status = 'rejected'
            state.error = action.error
        })
    }
});
