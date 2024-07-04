import imgSearch from '../../assets/image/search.svg'

export default function Search(){
    return <>
        <div className="search">
            <img src={imgSearch} alt='icon search' className="search__icon"/>
            <input placeholder="Search high-resolution photos" className="search__input"></input>
            <div className="search__btn">Search</div>
        </div>
    </>
}