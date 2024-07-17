import Nav from "../components/nav/Nav"
import HeaderCollection from "../components/headercollection/HeaderCollection"
import Search from "../components/search/Search"
import ContentImages from "../components/contentimages/ContentImages"
import SelectFilter from "../components/select/SelectFilter"
import Footer from "../components/footer/Footer"
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { activeHeigth, activeWidth, setMaxSelect, setMinSelect, setStateSelect } from "../features/select/selectSlice"
import { activateAllBorderNav } from "../features/style/styleContentImageSlice"
import { Modal } from "@mui/material"
import { setOpen } from "../features/modal/modalSlice"
import notification from "../features/notification/toastify"

export function MyCollection(){
    const [width, setWidth] = useState(window.innerWidth);
    const [rangewidth,setRangewidth] = useState([20, 37])
    const [rangeheigth,setRangeheigth] = useState([20, 37])
    const dispatch = useDispatch();
    const SelectorSetOper = useSelector(state => state.modal.open)
    const [description,setDescription] = useState(''); 


    //imagenes locales EVALUAR LOS DATOS SEGUN ESTADO VER SI VIENE DE UN FILTRO O NO
    const imgsLocal = [];
    const selectorStateSelect = useSelector(state => state.select.state);
    if(selectorStateSelect === 'none'){
        for (let index = 0; index < localStorage.length; index++) {
            imgsLocal.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
        }
    }
  
    //recargar al eliminar fotos
    useSelector(state => state.imageChange.lengthlocal);
   
    //carga los styles show/hide selects -> Sliders
    const stylewidth = useSelector(state => state.styleImages.selectWidth);
    const styleheigth = useSelector(state => state.styleImages.selectHeigth);

    const path = useLocation().pathname;
    const style = {
        widthcontent:{
           width: '56.25em'
        },
        widthinput:{
            width: '50.25em'
        }
    }

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        dispatch(setStateSelect('none'))
        dispatch(activateAllBorderNav())
        dispatch(setOpen(false))
    }, [])

    const rangeWidthHandle = (event, action) => {
        setRangewidth(action)
        dispatch(setMaxSelect(rangewidth[1]))
        dispatch(setMinSelect(rangewidth[0]))
        dispatch(activeWidth())
    }

    const rangeHeigthHandle = (event, action) => {
        setRangeheigth(action)
        dispatch(setMaxSelect(rangeheigth[1]))
        dispatch(setMinSelect(rangeheigth[0]))
        dispatch(activeHeigth())
    }

    const handleClose = () => {
        dispatch(setOpen(false))
    }
    
    const selectIdEditModal = useSelector(state => state.modal.id)
    let imgModal
    if(SelectorSetOper){
        imgModal = JSON.parse(localStorage.getItem(selectIdEditModal))
    }
    console.log(imgModal)

    const saveDescription = () => {
        console.log(description)
        const imgChangedDescription = imgModal.map((element) => {
            return {
                ...element,
                description: description
            }
        });
        localStorage.setItem(selectIdEditModal,JSON.stringify(imgChangedDescription))
        notification('Updated Description Correctly',2000);
        handleClose()
    }

    const textAreaValue = (descriptionval) => {
        setDescription(descriptionval)
    }

    return <>
            <Nav  path={path}/>
            <Modal 
            open={SelectorSetOper}
            onClose={handleClose}
            aria-labelledby="Editar Descripcion"
            aria-describedby="Editar la descripcion de una imagen guardada en favoritos"
            >
                <Box className="modal">
                    <div className="modal__content">
                         <h1 className="modal__content__tit">Edit Description</h1>
                         <span className="modal__content__span">Edit your favorite image</span>
                    </div>

                    <div className="modal__contentimg">
                    {SelectorSetOper ? <img className="modal__contentimg__img" src={imgModal[0].urls.regular} alt={`editable description image ${imgModal[0].alt_description}`} ></img> : <></>}
                    </div>
                    
                    <div className="modal__description">
                    {SelectorSetOper ? <textarea rows="6" cols="33" onChange={(e) => textAreaValue(e.target.value)} className="modal__description__area">{imgModal[0].description === null ? imgModal[0].alt_description: imgModal[0].description}</textarea> : <></>}
                        <div className="modal__description__btn" onClick={saveDescription}>Save</div>
                    </div>
                </Box>    
            </Modal>
            <div className="view">
                <HeaderCollection />
                {(width < 1000) ? <Search path={path} placeholder='Search by description'/> : <Search path={path} placeholder='Search by description' style={style} width={width}/>}
                <div>
                    <SelectFilter />
                    <Box className="duoSlider" style={stylewidth}>
                        <span className="duoSlider__spanwidth">Min Width ({rangewidth[0]}px)</span>
                        <Slider 
                        getAriaLabel={() => 'Width range'}
                        value={rangewidth}
                        onChange={rangeWidthHandle}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => rangewidth}
                        min={500}
                        max={10000}
                        style={{display: 'inline-block', width: '30%', margin: '0 1em'}}
                        />
                        <span className="duoSlider__spanheight">Max Width ({rangewidth[1]}px)</span>
                    </Box>
                    <Box className="duoSlider" style={styleheigth}>
                        <span className="duoSlider__spanwidth">Min Height ({rangeheigth[0]}px)</span>
                        <Slider 
                        getAriaLabel={() => 'Heigth range'}
                        value={rangeheigth}
                        onChange={rangeHeigthHandle}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => rangeheigth}
                        min={500}
                        max={10000}
                        style={{display: 'inline-block', width: '30%',  margin: '0 1em'}}
                        />
                        <span className="duoSlider__spanwidth">Max Height ({rangeheigth[1]}px)</span>
                    </Box>
                </div>
                <ContentImages imgs={imgsLocal} path={path}/>
                <Footer width={width}/>
            </div>
            </>
}