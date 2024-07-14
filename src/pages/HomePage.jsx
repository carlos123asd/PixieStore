import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import Search from '../components/search/Search'
import ContentImages from '../components/contentimages/ContentImages'
import Footer from '../components/footer/Footer'
import Subtitles from '../components/subtitles/Subtitles'
import Tags from '../components/tags/Tags'
import BtnDiscoverMore from '../components/btndiscovermore/BtnDiscoverMore'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { store } from '../app/store'
import { resetStyle } from "../features/style/styleContentImageSlice";
import { imagesSearchThunk } from '../features/images/imagesSearchThunk'
import { setStateSelect } from '../features/select/selectSlice'

export function HomePage(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        dispatch(resetStyle());
        dispatch(setStateSelect('none'))
    },[])

    const path = useLocation().pathname;

    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    //SELECTOR RANDOM
    const stateImageData = useSelector(state => state.images.data);
    const stateImageStatus = useSelector(state => state.images.status);
    
    useEffect(() =>{
        if(stateImageStatus === 'idle'){
                dispatch(imagesSearchThunk());
        }else if(stateImageStatus === 'fulfilled'){
            setLoading(false);
        }
    },[stateImageStatus])

    console.log('Images Search',stateImageData);

    if(loading){ 
        return <h1>Loading...</h1>
    }else{
        return <>
            <Nav width={width} path={'/'}/>
            <div className='view'>
                <Banner width={width}/>
                {(width < 1000) ? <Search placeholder='Search free high-resolution photos'/> : null}
                {(width < 1000) ? null : <Subtitles title='Trending searches'/>}
                <Tags />
                {(width < 1000) ? null : <Subtitles title='New & Notable'/>}
                <ContentImages imgs={stateImageData} path={path}/>
                <BtnDiscoverMore imgsNum={stateImageData.length}/>
                <Footer width={width}/>
            </div>
        </>
    }
}