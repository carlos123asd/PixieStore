import { useState } from "react"
import Pagination from "../pagination/Pagination";
export default function BtnDiscoverMore(){
    const [hidden,setHidden] = useState({});
    const clickHandle = () => {
        setHidden({
            display: 'none'
        })
    }

    return <>
        <div  style={hidden} onClick={clickHandle} className="btndiscovermore">
            <span className="btndiscovermore__span">Discover more</span>
        </div>
        {(hidden.hasOwnProperty('display')) ? <Pagination /> : null}
    </>
}