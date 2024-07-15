import { store } from '../../app/store';
import favorite from '../../assets/image/favorite.svg'
import { changeValueLengthLocal } from '../../features/images/imagesChangesSlice';
import notification from '../../features/notification/toastify';


export default function BtnFavorite({keyDelete}) {
    console.log(keyDelete);
    const clickDeleteHandle = () => {
        localStorage.removeItem(keyDelete)
        store.dispatch(changeValueLengthLocal(localStorage.length))
        notification('Image deleted from your collection',2000);
    };

    return <>
        <div className='favorite' onClick={clickDeleteHandle}>
            <img className='favorite__img' src={favorite} alt="remove favorite" />
        </div>
    </>
}