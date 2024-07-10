import { createSlice } from "@reduxjs/toolkit";

const styleContentImageSlice = createSlice({
    name: 'styleImages',
    initialState: {
        data: {
            //height: 'auto',
            mask: 'linear-gradient(to top, transparent 1%, black 16%)',
            webkit: 'linear-gradient(to top, transparent 1%, black 16%)'
        }
    },
    reducers:{
        changeStyle(state){
            state.data = {
               // height: '100%',
                mask: 'none',
                webkit: 'none'
            }
        },
        resetStyle(state){
            state.data = {
                //height: '100%',
                mask: 'linear-gradient(to top, transparent 1%, black 16%)',
                webkit: 'linear-gradient(to top, transparent 1%, black 16%)'
            }
        }
    }
});
//129em
export default styleContentImageSlice.reducer;
export const { changeStyle, resetStyle } = styleContentImageSlice.actions;