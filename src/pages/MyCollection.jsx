import Nav from "../components/nav/Nav"
import HeaderCollection from "../components/headercollection/HeaderCollection"
import Tags from "../components/tags/Tags"
import Search from "../components/search/Search"
import ContentImages from "../components/contentimages/ContentImages"
import BtnDiscoverMore from "../components/btndiscovermore/BtnDiscoverMore"
import Footer from "../components/footer/Footer"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

export function MyCollection(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    });
    
    const path = useLocation().pathname;

    const style = {
        widthcontent:{
           width: '56.25em'
        },
        widthinput:{
            width: '50.25em'
        }
    }

    //imagenes locales
    const imgsLocal = [];
    for (let index = 0; index < localStorage.length; index++) {
        imgsLocal.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
    }
  
    //recargar al eliminar fotos
    useSelector(state => state.imageChange.lengthlocal);

    return <>
                <Nav />
                <HeaderCollection />
                <Tags width={width}/>
                {(width < 1000) ? <Search placeholder='Search by description'/> : <Search placeholder='Search by description' style={style} width={width}/>}
                <ContentImages imgs={imgsLocal} path={path}/>
                <BtnDiscoverMore />
                <Footer width={width}/>
                </>
}