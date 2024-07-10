import { useSelector } from "react-redux";
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";
import BtnFavorite from "../btnfavorite/BtnFavorite";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";
import { addSelectData } from "../../features/imageSelected/imageSelectedSlice";


export default function ContentImages({imgs, path}) {
    console.log('¿Porque se ejecuta tantas veces?',imgs);
    const selectorSearch = useSelector(state => state.images.search);
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
            }
    }

        return <>
            {
                <div className="images" style={style}>
                    {
                        selectorSearch ? imgs.results.map((elementImage) => {
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
                        })  :
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