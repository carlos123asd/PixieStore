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
        selectHeigth: {
            display: 'none'
        },
        btnNav: {
            home: false,
            all: false
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
        },
        activeBorderNav(state){
            state.btnNav.home = true
        },
        desactiveBorderNav(state){
            state.btnNav.home = false
        },
        desactiveAllBorderNav(state){
            state.btnNav.home = false
            state.btnNav.all = true
        },
        activateAllBorderNav(state){
            state.btnNav.all = false
        }
    }
});
//129em
export default styleContentImageSlice.reducer;
export const { 
    changeStyle,
    resetStyle, 
    selectChangeWidthShow, 
    selectChangeWidthHide, 
    selectChangeHeigthShow, 
    selectChangeHeigthHide, 
    activeBorderNav, 
    desactiveBorderNav, 
    desactiveAllBorderNav,
    activateAllBorderNav } = styleContentImageSlice.actions;