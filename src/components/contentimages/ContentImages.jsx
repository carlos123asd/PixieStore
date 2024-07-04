import { useLocation } from 'react-router-dom'
import BtnGroupHome from "../btngrouphome/BtnGroupHome"
import BtnGroupMyCollection from "../btngroupmycollection/BtnGroupMyCollection";

export default function ContentImages() {
    const path = useLocation().pathname;
    return <>
        <div className="images">
            <div className="images__image">
                 {path === '/myCollection' ? <BtnGroupMyCollection /> : <BtnGroupHome />}
            </div>
        </div>
    </>
}