import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";
import BtnFavorite from "../btnfavorite/BtnFavorite";
import { useNavigate } from "react-router-dom";
import { addSelectData } from "../../features/imageSelected/imageSelectedSlice";
import { useDispatch, useSelector } from "react-redux";


export default function ContentImages({imgs, path}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectorStateSelect = useSelector(state => state.select.state);
    const selectorDataSelect = useSelector(state => state.select.data);

    //IR A VER PAGINA INDIVIDUAL DE LA IMAGEN
    const imageSelectedHandle = (id) => {
        console.log(id,imgs)
            if(path === '/'){
                dispatch(addSelectData(imgs.filter((img) => {
                    return img.id === id
                })))
            }else if(path === '/myCollection'){
                if(selectorStateSelect === 'none'){
                    const imgIndividual = imgs.filter((img) => {
                        return img[0].id === id
                    })
                    console.log(imgIndividual);
                    dispatch(addSelectData(imgIndividual[0]))
                }else{
                    const imgIndividual = selectorDataSelect.filter((img) => {
                        return img.id === id
                    })
                    console.log(imgIndividual);
                    dispatch(addSelectData(imgIndividual))
                }
            }
            navigate('/profile')
    }

    
    
    console.log(selectorDataSelect);
        return <>
            {
                <div className="images">
                    {
                        (selectorStateSelect === 'none') ?
                            (imgs.length === 0) ? <h2 style={{textAlign:'center'}}>No results...</h2> :
                            imgs.map((elementImage) => {
                                console.log(elementImage)
                                return <>
                                    <div className="images__image">
                                        {path === '/myCollection' ? <BtnGroupMyCollection id={elementImage[0].id}/> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
                                        {path === '/myCollection' ? <BtnFavorite keyDelete={elementImage[0].id}/> : <></>}
                                        {path === '/myCollection' ? <img onClick={() => imageSelectedHandle(elementImage[0].id)} className="images__image__img" src={elementImage[0].urls.regular} alt={elementImage[0].slug}/> : <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/>}
                                    </div>
                                </>
                            }) :
                            (selectorDataSelect.length === 0) ? <h2 style={{textAlign:'center'}}>No results...</h2> :
                            selectorDataSelect.map((elementImage) => {
                                return <>
                                    <div className="images__image">
                                        {path === '/myCollection' ? <BtnGroupMyCollection id={elementImage.id}/> : <BtnGroupHome imgs={imgs} id={elementImage.id}/>}
                                        {path === '/myCollection' ? <BtnFavorite keyDelete={elementImage.id}/> : <></>}
                                        {path === '/myCollection' ? <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/> : <img onClick={() => imageSelectedHandle(elementImage.id)} className="images__image__img" src={elementImage.urls.regular} alt={elementImage.slug}/>}
                                    </div>
                                </>
                            })
                    }
                </div> 
            }
        </>
}