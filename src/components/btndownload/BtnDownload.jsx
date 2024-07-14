import { useDispatch } from "react-redux";
import { downloadThunk } from "../../features/images/downloadThunk";

export default function BtnDownload({imgdownload}){
    const dispatch = useDispatch();
    const downloadImg = () => {
        dispatch(downloadThunk(imgdownload[0].urls.full))//photo.links.download_location
    }

    return <>
        <div className="download" onClick={downloadImg}>
            <span className="download__tit">Free Download</span>
            <div className="download__btn">Download</div>
        </div>
    </>
}