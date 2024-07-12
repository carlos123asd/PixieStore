import { useSelector } from "react-redux";
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";
import BtnFavorite from "../btnfavorite/BtnFavorite";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";
import { addSelectData } from "../../features/imageSelected/imageSelectedSlice";


export default function ContentImages({imgs, path}) {
    console.log('¿Porque se ejecuta tantas veces?',imgs);
    const selectorSearch = useSelector(state => state.images.search.state);
    //TIENES DATOS DEL SEARCH LLEGANDO PERO TIENES QUE ADAPTARLO -> CONSEGUIDO
    /*
    1. CREAR UN NUEVO ESTADO BOOLEANO EN EL SLICE DE LAS IMAGENES 
    2. CREA UN SELECTOR Y CONSULTA EL ESTADO DE ESE BOOLEANO
    3. DEPENDIENDO SI ES TRUE SIGNIFUCA QUE ESTA INFORMACION ES DE SEAR Y SE TIENE QUE TRATAR ESA INFORMACION DE OTRA FORMA Y MOSTRARLO
    */
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
            }else if(path === '/myCollection'){
                store.dispatch(addSelectData(imgs.filter((img) => {
                    return img[0].id === id
                })))
            }
            navigate('/profile')
    }
console.log('estado en content', selectorSearch);
        return <>
            {
                <div className="images" style={style}>
                    {
                        selectorSearch ? imgs.map((elementImage) => {
                            return <>
                                <div className="images__image">
                                    {path === '/myCollection' ? <BtnGroupMyCollection /> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
                                    {path === '/myCollection' ? <BtnFavorite keyDelete={elementImage.key}/> : <></>}
                                    {path === '/myCollection' ? <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage[0].urls.regular} alt={elementImage[0].slug}/> : <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/>}
                                </div>
                            </>
                        })  :
                        imgs.map((elementImage) => {
                            return <>
                                <div className="images__image">
                                    {path === '/myCollection' ? <BtnGroupMyCollection id={elementImage[0].id}/> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
                                    {path === '/myCollection' ? <BtnFavorite keyDelete={elementImage[0].id}/> : <></>}
                                    {path === '/myCollection' ? <img onClick={() => imageSelectedHandle(elementImage[0].id)} className="images__image__img" src={elementImage[0].urls.regular} alt={elementImage[0].slug}/> : <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/>}
                                </div>
                            </>
                        }) 
                    }
                </div> 
            }
        </>
}