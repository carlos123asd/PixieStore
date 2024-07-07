import Nav from "../components/nav/Nav"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/search/Search";
import ContentImages from "../components/contentimages/ContentImages";
import Subtitles from "../components/subtitles/Subtitles";
import Description from "../components/description/Description";

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
    return <>
        <Nav width={width} style={styleImageSelectedNav} path={path}/>
        {width < 1000 ? <Search /> : null}
        <ContentImages />
        <Subtitles title={'Photo Description'}/>
        <Description />
    </>
}