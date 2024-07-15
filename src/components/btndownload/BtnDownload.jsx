import { useDispatch } from "react-redux";
import { downloadThunk } from "../../features/images/downloadThunk";
import notification from '../../features/notification/toastify'

export default function BtnDownload({imgdownload}){
    const dispatch = useDispatch();
    const downloadImg = () => {
        dispatch(downloadThunk(imgdownload[0].urls.full))
        notification('Images downloaded successfully',2000);
    }

    return <>
        <div className="download" onClick={downloadImg}>
            <span className="download__tit">Free Download</span>
            <div className="download__btn">Download</div>
        </div>
    </>
}