import Nav from "../components/nav/Nav"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/search/Search";
import Subtitles from "../components/subtitles/Subtitles";
import Description from "../components/description/Description";
import { store } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import CardInformation from "../components/cardInformation.jsx/CardInformation";
import BtnDownload from "../components/btndownload/BtnDownload";
import BtnAddFavorite from "../components/btnaddfavorite/BtnAddFavorite";
import HeaderImageSelected from "../components/headerimgselected/HeaderImgSelected";
import RelatedImageSlider from "../components/relatedslice/RelatedImageSlider";
import { getRandomPhotosSlider } from "../features/images/imagesSlice";
import Footer from "../components/footer/Footer";
import Tags from '../components/tags/Tags'
import { setStateSelect } from "../features/select/selectSlice";

export function ImageSelected(){
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
    });
    const path = useLocation().pathname;
    const dispatch = useDispatch()
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

    const dataRandomImage = useSelector(state => state.images.data);
   
//AQUII
    useEffect(() => {
        if(dataRandomImage.length !== 0){
            dispatch(getRandomPhotosSlider(dataRandomImage));
        }
        dispatch(setStateSelect('none'))
    }, [])

    const data = useSelector(state => state.imageSelected.data);

    const sixRandomImages = useSelector(state => state.images.randomPhotos);
    
    console.log(data);
    const dataCardInformation = {
        img: data[0].urls.regular,
        profileimage: data[0].user.profile_image.medium,
        nameUser: data[0].user.name,
        views: data[0].views,
        likes: data[0].likes,
        width: data[0].width,
        height: data[0].height,
        datepublication: data[0].created_at,
        alt: data[0].alt_description,
        description: data[0].description
    }

    return <>
        <Nav width={width} style={styleImageSelectedNav} path={path}/>
        <div className="view">
            {width < 1000 ? <Search path={path}/> : <></>}
            {width < 1000 ?  <>
            <HeaderImageSelected img={dataCardInformation.img} tit={dataCardInformation.alt}/>
            <Subtitles title={'Photo Description'}/>
            <Description description={dataCardInformation.description} alt={dataCardInformation.alt}/>
            <Subtitles title={'Author'}/>
            <CardInformation img={dataCardInformation}/>
            <Subtitles title={'Download'}/>
            <BtnDownload />
            <BtnAddFavorite item={data}/></> : 
            <><div className="contentselected">
                <HeaderImageSelected img={dataCardInformation.img} tit={dataCardInformation.alt}/>
                <Subtitles title={'Photo Description'}/>
                <Description description={dataCardInformation.description} alt={dataCardInformation.alt}/>
            </div>
            <div className="contentselectedinfo">
                <Subtitles title={'Author'}/>
                <CardInformation img={dataCardInformation}/>
                <Subtitles title={'Download'}/>
                <BtnDownload />
                <BtnAddFavorite item={data}/>
            </div></>}
            <Subtitles title={'Tags'} />
            <Tags />
            {
              (dataRandomImage.length !== 0) ?<>
                <Subtitles title={'More Images'}/>
                <RelatedImageSlider imgs={sixRandomImages}/>
              </>
              : <></>
            }
            <Footer />
        </div>
    </>
}