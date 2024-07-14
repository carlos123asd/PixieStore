import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        id: '',
        save: false
    },
    reducers: {
        setOpen(state,action){
            state.open = action.payload
        },
        setData(state,action){
            state.id = action.payload
        }
    }
});

export default modalSlice.reducer

export const { setOpen,setData } = modalSlice.actions