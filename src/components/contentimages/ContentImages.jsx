import { useSelector } from "react-redux";
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";
import BtnFavorite from "../btnfavorite/BtnFavorite";

export default function ContentImages({imgs, path}) {
    const stateContentImageStyle = useSelector(state => state.styleImages.data);
    const style = {
        //height: stateContentImageStyle.height,
        '-webkit-mask-image': stateContentImageStyle.mask,
        'mask-image': stateContentImageStyle.webkit
    }

        return <>
            {
                <div className="images" style={style}>
                    {
                        imgs.map((elementImage) => {
                            return <>
                                <div className="images__image">
                                    {path === '/myCollection' ? <BtnGroupMyCollection /> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
                                    {path === '/myCollection' ? <BtnFavorite keyDelete={elementImage.key}/> : null}
                                    {path === '/myCollection' ? <img className="images__image__img" src={elementImage[0].urls.regular} alt={elementImage[0].slug}/> : <img className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/>}
                                </div>
                            </>
                        }) 
                    }
                </div> 
            }
        </>
}

/*imgs.map((elementImage) => {
    console.log('datos',elementImage[0]);
    return <>
        <div className="images__image">
            {path === '/myCollection' ? <BtnGroupMyCollection /> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
            <img className="images__image__img" src={elementImage[0].urls.regular} alt={elementImage[0].slug}/>
        </div>
    </>
}) */