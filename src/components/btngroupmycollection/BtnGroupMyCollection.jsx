import imgEdit from '../../assets/image/edit.svg'
import imgDownload from '../../assets/image/download.svg'
import { setData, setOpen } from '../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { downloadThunk } from '../../features/images/downloadThunk'
import notification from '../../features/notification/toastify'

export default function BtnGroupMyCollection({id}){

    const imgDownLoad = JSON.parse(localStorage.getItem(id))
    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(setOpen(true))
        console.log(id)
        dispatch(setData(id))
    }

    const downloadImg = () => {
        dispatch(downloadThunk(imgDownLoad[0].urls.full))
        notification('Images downloaded successfully',2000);
    }

    return <>
        <div className="btngroumycollection">
            <div onClick={handleOpen} className="btngroumycollection__edit">
                <img src={imgEdit} alt='I like it' className='btngroumycollection__edit__img'/>
            </div>

            <div className="btngroumycollection__download" onClick={downloadImg}>
                <img src={imgDownload} alt='Download' className='btngroumycollection__download__img'/>
            </div>
        </div>
    </>
}