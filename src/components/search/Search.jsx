import imgSearch from '../../assets/image/search.svg'

export default function Search({placeholder, width, style, path}){
    if(width >= 1000){
        if(path === '/profile'){
            return <>
                <div className="search" style={style.content}>
                    <div className='search__content'>
                        <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                    </div>
                    <input placeholder={placeholder} style={style.widthinput, style.input} className="search__input"></input>
                    <div className="search__btn" style={style.btn}>Search</div>
                </div>
            </>
        }else{
            return <>
                <div className="search" style={style.widthcontent}>
                    <div className='search__content'>
                        <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                    </div>
                    <input placeholder={placeholder} style={style.widthinput} className="search__input"></input>
                    <div className="search__btn">Search</div>
                </div>
            </>
        }
    }else{
        return <>
            <div className="search" style={style}> 
                <div className='search__content'>
                    <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                </div>
                <input placeholder={placeholder} className="search__input"></input>
                <div style={style} className="search__btn">Search</div>
            </div>
        </>
    }
}//error en style.btn y style.content ver en el else