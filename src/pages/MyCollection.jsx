import Nav from "../components/nav/Nav"
import HeaderCollection from "../components/headercollection/HeaderCollection"
import Tags from "../components/tags/Tags"
import Search from "../components/search/Search"
import ContentImages from "../components/contentimages/ContentImages"
import BtnDiscoverMore from "../components/btndiscovermore/BtnDiscoverMore"
import Footer from "../components/footer/Footer"
import { useState } from "react"

export function MyCollection(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    });

    const style = {
        widthcontent:{
           width: '56.25em'
        },
        widthinput:{
            width: '50.25em'
        }
    }
    return <>
            <Nav />
            <HeaderCollection />
            <Tags width={width}/>
            {(width < 1000) ? <Search placeholder='Search by description'/> : <Search placeholder='Search by description' style={style} width={width}/>}
            <ContentImages />
            <BtnDiscoverMore />
            <Footer width={width}/>
    </>
}