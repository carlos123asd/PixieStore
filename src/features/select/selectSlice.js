import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
    name: 'select',
    initialState: {
        max: 1000,
        min: 0,
        width: false,
        heigth: false,
        state: 'none',
        data: []
    },
    reducers:{
        setMaxSelect(state,action){
            state.max = action.payload
        },
        setMinSelect(state,action){
            state.min = action.payload
        },
        activeWidth(state){
            state.width = true
            state.heigth = false
        },
        activeHeigth(state){
            state.heigth = true
            state.width = false
        },
        desactiveSlice(state){
            state.width = false
            state.heigth = false
        },
        setStateSelect(state,action){
            state.state = action.payload
        },
        setDataFilters(state,action){
            state.data = action.payload
        }
    }
});

export default selectSlice.reducer
export const { setMaxSelect, setMinSelect, activeWidth, activeHeigth, desactiveSlice, setStateSelect, setDataFilters } = selectSlice.actions