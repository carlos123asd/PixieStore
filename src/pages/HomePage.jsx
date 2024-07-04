import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import SelectFilter from '../components/select/SelectFilter'
import ContentImages from '../components/contentimages/ContentImages'
import Footer from '../components/footer/Footer'
import Subtitles from '../components/subtitles/Subtitles'
import Tags from '../components/tags/Tags'
import { useState } from 'react'

export function HomePage(){
    const [width, setWidth] = useState(0);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });

    if (width < 1000) {
        return <>
            <Nav />
            <Banner />
            <Search placeholder='Search free high-resolution photos'/>
            <SelectFilter />
            <ContentImages />
            <Footer />
        </>
    }else{
        return <>
            <Nav />
            <Banner width={width}/>
            <Subtitles title='Trending searches'/>
            <div style={{width:'100%', height:'4em'}}>
                <Tags />
                <SelectFilter />
            </div>
            <Subtitles title='New & Notable'/>
            <ContentImages />
            <Footer width={width}/>
        </>
    }
}