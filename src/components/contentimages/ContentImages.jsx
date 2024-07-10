import { useSelector } from "react-redux";
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";
import BtnFavorite from "../btnfavorite/BtnFavorite";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";
import { addSelectData } from "../../features/imageSelected/imageSelectedSlice";


export default function ContentImages({imgs, path}) {
    console.log('datosOMG',imgs);
    const stateContentImageStyle = useSelector(state => state.styleImages.data);
    const navigate = useNavigate();
    const style = {
        //height: stateContentImageStyle.height,
        '-webkit-mask-image': stateContentImageStyle.mask,
        'mask-image': stateContentImageStyle.webkit
    }

    const imageSelectedHandle = (id) => {
            if(path === '/'){
                store.dispatch(addSelectData(imgs.filter((img) => {
                    return img.id === id
                })))
            }
    }

        return <>
            {
                <div className="images" style={style}>
                    {
                        imgs.map((elementImage) => {
                            return <>
                                <div className="images__image" onClick={() => {
                                    imageSelectedHandle(elementImage.id)
                                    navigate('/profile')
                                }}>
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