import { createSlice } from "@reduxjs/toolkit";

const styleContentImageSlice = createSlice({
    name: 'styleImages',
    initialState: {
        data: {
            //height: 'auto',
            mask: 'linear-gradient(to top, transparent 1%, black 16%)',
            webkit: 'linear-gradient(to top, transparent 1%, black 16%)'
        },
        selectWidth: {
            display: 'none'
        },
        selectHeigth:{
            display: 'none'
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
        },
        selectChangeWidthShow(state){
            state.selectWidth = {
                display: 'block'
            }
        },
        selectChangeWidthHide(state){
            state.selectWidth = {
                display: 'none'
            }
        },
        selectChangeHeigthShow(state){
            state.selectHeigth = {
                display: 'block'
            }
        },
        selectChangeHeigthHide(state){
            state.selectHeigth = {
                display: 'none'
            }
        }
    }
});
//129em
export default styleContentImageSlice.reducer;
export const { changeStyle, resetStyle, selectChangeWidthShow, selectChangeWidthHide, selectChangeHeigthShow, selectChangeHeigthHide  } = styleContentImageSlice.actions;