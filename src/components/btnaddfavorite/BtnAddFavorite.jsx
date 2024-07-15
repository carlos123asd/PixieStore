import notification from '../../features/notification/toastify'

export default function BtnAddFavorite({item}){

    const clickHandle = () => {
        localStorage.setItem(item[0].id,JSON.stringify(item));
        notification('Image save correctly',2000);
    }

    return <>
        <div className="addfavorite"  onClick={clickHandle}>
            <div className="addfavorite__btn">Add to Favorites</div>
        </div>
    </>
}