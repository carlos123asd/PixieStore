import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import SelectFilter from '../components/select/SelectFilter'
import ContentImages from '../components/contentimages/ContentImages'
import Footer from '../components/footer/Footer'
import Subtitles from '../components/subtitles/Subtitles'
import Tags from '../components/tags/Tags'
import BtnDiscoverMore from '../components/btndiscovermore/BtnDiscoverMore'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomImagesListThunk } from '../features/images/imagesThunk'
import { useLocation } from 'react-router-dom'
import { store } from '../app/store'
import { resetStyle } from "../features/style/styleContentImageSlice";

export function HomePage(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });

    const path = useLocation().pathname;

    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();
    const stateImageData = useSelector(state => state.images.data);
    const stateImageStatus = useSelector(state => state.images.status);
    
    useEffect(() =>{
        if(stateImageStatus === 'idle'){
            dispatch(fetchRandomImagesListThunk());
        }else if(stateImageStatus === 'fulfilled'){
            setLoading(false);
        }
    },[stateImageStatus])

    useEffect(() => {
        store.dispatch(resetStyle());
    }, [])
    
    if(loading){ 
        return <h1>Loading...</h1>
    }else{
        return <>
            <Nav width={width} path={'/'}/>
            <Banner width={width}/>
            {(width < 1000) ? <Search placeholder='Search free high-resolution photos'/> : null}
            {(width < 1000) ? null : <Subtitles title='Trending searches'/>}
            {(width < 1000) ? <SelectFilter /> : <div style={{width:'100%', height:'4em'}}><Tags /><SelectFilter /></div>}
            {(width < 1000) ? null : <Subtitles title='New & Notable'/>}
            <ContentImages imgs={stateImageData} path={path}/>
            <BtnDiscoverMore />
            <Footer width={width}/>
        </>
    }
}