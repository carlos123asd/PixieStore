import imgSearch from '../../assets/image/search.svg'

export default function Search({placeholder}){
    return <>
        <div className="search">
            <div className='search__content'>
                <img src={imgSearch} alt='icon search' className="search__content__icon"/>
            </div>
            <input placeholder={placeholder} className="search__input"></input>
            <div className="search__btn">Search</div>
        </div>
    </>
}