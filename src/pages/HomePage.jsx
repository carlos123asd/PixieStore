import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import SelectFilter from '../components/select/SelectFilter'
import ContentImages from '../components/contentimages/ContentImages'
import Footer from '../components/footer/Footer'
import Subtitles from '../components/subtitles/Subtitles'
import Tags from '../components/tags/Tags'
import { useState } from 'react'
import BtnDiscoverMore from '../components/btndiscovermore/BtnDiscoverMore'

export function HomePage(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });
return <>
    <Nav />
    <Banner width={width}/>
    {(width < 1000) ? <Search placeholder='Search free high-resolution photos'/> : null}
    {(width < 1000) ? null : <Subtitles title='Trending searches'/>}
    {(width < 1000) ? <SelectFilter /> : <div style={{width:'100%', height:'4em'}}><Tags /><SelectFilter /></div>}
    {(width < 1000) ? null : <Subtitles title='New & Notable'/>}
    <ContentImages />
    <BtnDiscoverMore />
    <Footer width={width}/>
    </>
}