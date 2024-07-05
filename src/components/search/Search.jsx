import imgSearch from '../../assets/image/search.svg'

export default function Search({placeholder, width, style}){
    if(width >= 1000){
        return <>
            <div className="search" style={style.widthcontent}>
                <div className='search__content'>
                    <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                </div>
                <input placeholder={placeholder} style={style.widthinput} className="search__input"></input>
                <div className="search__btn">Search</div>
            </div>
        </>
    }else{
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
}