import { useLocation } from 'react-router-dom'
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";

export default function ContentImages({imgs}) {
    const path = useLocation().pathname;
    console.log(imgs);
    return <>
        <div className="images">
           {
               
           }
        </div>
    </>
}