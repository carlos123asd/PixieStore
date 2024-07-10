import Nav from "../components/nav/Nav"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/search/Search";
import Subtitles from "../components/subtitles/Subtitles";
import Description from "../components/description/Description";
import { store } from "../app/store";
import { resetStyle } from "../features/style/styleContentImageSlice";
import { createSelector } from "@reduxjs/toolkit";

export function ImageSelected(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });
    const path = useLocation().pathname;
    const styleImageSelectedNav = {
        search: {
            content:{
                width: '31.94rem',
                'margin-top': '.3rem',
                height: '2.50rem',
                'margin-left': '2rem',
                display: 'inline-block'
            },
            input:{
                
                width: '21.44rem'
            },
            btn:{
                height: '100%',
                'margin-top': 0
            }
        },
        name: {
            content:{
                'vertical-align': 'super'
            }
        }
    }

    useEffect(() => {
        store.dispatch(resetStyle());
    }, [])

    const data = createSelector(state => state.imageSelected.data);
    console.log('dato seleccionado',data);

    return <>
        <Nav width={width} style={styleImageSelectedNav} path={path}/>
        {width < 1000 ? <Search /> : null}
        <Subtitles title={'Photo Description'}/>
        <Description />
    </>
}