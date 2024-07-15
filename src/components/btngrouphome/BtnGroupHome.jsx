import imgLike from '../../assets/image/like.svg'
import imgDownload from '../../assets/image/download.svg'
import { changeValueLengthLocal } from '../../features/images/imagesChangesSlice';
import { downloadThunk } from '../../features/images/downloadThunk';
import { useDispatch } from 'react-redux'
import notification from '../../features/notification/toastify';

export default function BtnGroupHome({imgs, id}){
    const dispatch = useDispatch()

    const clickHandle = () => {
        let imageFavorite = imgs.filter(img => {
            return img.id === id
        });
        localStorage.setItem(id,JSON.stringify(imageFavorite));
        dispatch(changeValueLengthLocal(localStorage.length));
        notification('Image save correctly',2000);
    }

    
    const downloadImg = () => {
        const imgDownLoad = imgs.filter(img => {
            return img.id === id
        });
        dispatch(downloadThunk(imgDownLoad[0].urls.full))//photo.links.download_location
        notification('Images downloaded successfully',2000);
    }

    return <>
        <div className="btngrouphome">
            <div className="btngrouphome__like" onClick={clickHandle}>
                <img src={imgLike} alt='I like it' className='btngrouphome__like__img'/>
            </div>

            
            <div className="btngrouphome__download" onClick={downloadImg}>
                <img src={imgDownload} alt='Download' className='btngrouphome__download__img'/>
            </div>
        </div>
    </>
}