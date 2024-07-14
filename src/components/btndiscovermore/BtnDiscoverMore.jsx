import { useState } from "react"
import Pagination from "../pagination/Pagination";
import { store } from "../../app/store";
import { changeStyle } from "../../features/style/styleContentImageSlice";

export default function BtnDiscoverMore({imgsNum}){
    const [hidden,setHidden] = useState({});

    const clickHandle = () => {
        setHidden({
            display: 'none'
        })
        store.dispatch(changeStyle());
    }

    return <>
        <div  style={hidden} onClick={clickHandle} className="btndiscovermore">
            <span className="btndiscovermore__span">Discover more</span>
        </div>
        {(hidden.hasOwnProperty('display')) ? <Pagination imgsNum={imgsNum}/> : null}
    </>
}