export default function BtnAddFavorite({item}){

    const clickHandle = () => {
        localStorage.setItem(item[0].id,JSON.stringify(item));
    }

    return <>
        <div className="addfavorite"  onClick={clickHandle}>
            <div className="addfavorite__btn">Add to Favorites</div>
        </div>
    </>
}