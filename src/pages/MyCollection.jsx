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

export function MyCollection(){
    const [width, setWidth] = useState(window.innerWidth);
    const [rangewidth,setRangewidth] = useState([20, 37])
    const [rangeheigth,setRangeheigth] = useState([20, 37])
    const dispatch = useDispatch();

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    });
    
    const path = useLocation().pathname;

    const style = {
        widthcontent:{
           width: '56.25em'
        },
        widthinput:{
            width: '50.25em'
        }
    }

    useEffect(() => {
        dispatch(setStateSelect('none'))
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

    return <>
            <Nav />
            <div className="view">
                <HeaderCollection />
                {(width < 1000) ? <Search path={path} placeholder='Search by description'/> : <Search path={path} placeholder='Search by description' style={style} width={width}/>}
                <div>
                    <SelectFilter />
                    <Box className="duoSlider" style={stylewidth}>
                        <Slider 
                        getAriaLabel={() => 'Width range'}
                        value={rangewidth}
                        onChange={rangeWidthHandle}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => rangewidth}
                        min={500}
                        max={10000}
                        />
                    </Box>
                    <Box className="duoSlider" style={styleheigth}>
                        <Slider 
                        getAriaLabel={() => 'Heigth range'}
                        value={rangeheigth}
                        onChange={rangeHeigthHandle}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => rangeheigth}
                        min={500}
                        max={10000}
                        />
                    </Box>
                </div>
                <ContentImages imgs={imgsLocal} path={path}/>
                <Footer width={width}/>
            </div>
            </>
}