import Nav from "../components/nav/Nav"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/search/Search";
import Subtitles from "../components/subtitles/Subtitles";
import Description from "../components/description/Description";
import { store } from "../app/store";
import { resetStyle } from "../features/style/styleContentImageSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import CardInformation from "../components/cardInformation.jsx/CardInformation";
import BtnDownload from "../components/btndownload/BtnDownload";
import BtnAddFavorite from "../components/btnaddfavorite/BtnAddFavorite";
import HeaderImageSelected from "../components/headerimgselected/HeaderImgSelected";
import RelatedImageSlider from "../components/relatedslice/RelatedImageSlider";
import { getRandomPhotosSlider } from "../features/images/imagesSlice";
import Footer from "../components/footer/Footer";

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

    const dataRandomImage = useSelector(state => state.images.data);

    useEffect(() => {
        store.dispatch(getRandomPhotosSlider(dataRandomImage));
    }, [])

    const data = useSelector(state => state.imageSelected.data);

    const sixRandomImages = useSelector(state => state.images.randomPhotos);
    
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
        {width < 1000 ? <Search /> : <></>}
        <HeaderImageSelected img={dataCardInformation.img} tit={dataCardInformation.alt}/>
        <Subtitles title={'Photo Description'}/>
        <Description description={dataCardInformation.description} alt={dataCardInformation.alt}/>
        <Subtitles title={'Author'}/>
        <CardInformation img={dataCardInformation}/>
        <Subtitles title={'Download'}/>
        <BtnDownload />
        <BtnAddFavorite />
        <Subtitles title={'More Images'}/>
        <RelatedImageSlider imgs={sixRandomImages}/>
        <Footer />
    </>
}