import imgLike from '../../assets/image/like.svg'
import imgDownload from '../../assets/image/download.svg'
import { changeValueLengthLocal } from '../../features/images/imagesChangesSlice';
import { store } from '../../app/store';

export default function BtnGroupHome({imgs, id}){
    
    const clickHandle = () => {
        let imageFavorite = imgs.filter(img => {
            return img.id === id
        });
        imageFavorite = {
            key: id,
            ...imageFavorite
        }
        localStorage.setItem(id,JSON.stringify(imageFavorite));
        store.dispatch(changeValueLengthLocal(localStorage.length));
    }

    return <>
        <div className="btngrouphome">
            <div className="btngrouphome__like" onClick={clickHandle}>
                <img src={imgLike} alt='I like it' className='btngrouphome__like__img'/>
            </div>
            <div className="btngrouphome__download">
                <img src={imgDownload} alt='Download' className='btngrouphome__download__img'/>
            </div>
        </div>
    </>
}