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
import { useLocation } from 'react-router-dom'
import { store } from '../app/store'
import { resetStyle } from "../features/style/styleContentImageSlice";
import { imagesSearchThunk } from '../features/images/imagesSearchThunk'
import { setSearch } from '../features/images/imagesSlice'

export function HomePage(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        store.dispatch(resetStyle());
    },[])

    const path = useLocation().pathname;

    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    //SELECTOR RANDOM
    const stateImageData = useSelector(state => state.images.data);
    const stateImageStatus = useSelector(state => state.images.status);
    //SELECTOR SEARCH
    const stateImageSearch = useSelector(state => state.images.search.state);
    const selectoKeyWord = useSelector(state => state.images.search.keyword);
    
    useEffect(() =>{
        console.log('stateImageStatus',stateImageStatus)
        if(stateImageStatus === 'idle'){
            if(stateImageSearch === false){
                console.log('DISPARA RANDOM');
                dispatch(imagesSearchThunk());
            }else{
                dispatch(imagesSearchThunk(selectoKeyWord));
                console.log('selectorkeyword',selectoKeyWord)
            }
        }else if(stateImageStatus === 'fulfilled'){
            setLoading(false);
        }
    },[stateImageStatus, selectoKeyWord])

    //console.log('Images Search o Random',stateImageData);

    if(loading){ 
        return <h1>Loading...</h1>
    }else{
        return <>
            <Nav width={width} path={'/'}/>
            <Banner width={width}/>
            {(width < 1000) ? <Search placeholder='Search free high-resolution photos'/> : null}
            {(width < 1000) ? null : <Subtitles title='Trending searches'/>}
            <Tags />
            {(width < 1000) ? null : <Subtitles title='New & Notable'/>}
            <ContentImages imgs={stateImageData} path={path}/>
            <BtnDiscoverMore />
            <Footer width={width}/>
        </>
    }
}