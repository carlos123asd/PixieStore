import { useState } from 'react'
import imgSearch from '../../assets/image/search.svg'
import { useDispatch} from 'react-redux';
import { imagesSearchThunk } from '../../features/images/imagesSearchThunk';
import { useNavigate } from 'react-router-dom';

export default function Search({placeholder, width, style, path}){

    const [keyword,setKeyword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const clickSearchHandle = () => {
        dispatch(imagesSearchThunk(keyword))
        if(path === '/profile' || path === '/myCollection'){
            navigate('/')
        }
    };

    if(width >= 1000){
        if(path === '/profile'){
            return <>
                <div className="search" style={style.content}>
                    <div className='search__content'>
                        <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                    </div>
                    <input onChange={event => setKeyword(event.target.value)} placeholder={placeholder} style={style.widthinput, style.input} className="search__input"></input>
                    <div onClick={clickSearchHandle} className="search__btn" style={style.btn}>Search</div>
                </div>
            </>
        }else{
            return <>
                <div className="search" style={style.widthcontent}>
                    <div className='search__content'>
                        <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                    </div>
                    <input onChange={event => setKeyword(event.target.value)} placeholder={placeholder} style={style.widthinput} className="search__input"></input>
                    <div onClick={clickSearchHandle} className="search__btn">Search</div>
                </div>
            </>
        }
    }else{
        return <>
            <div className="search" style={style}> 
                <div className='search__content'>
                    <img src={imgSearch} alt='icon search' className="search__content__icon"/>
                </div>
                <input onChange={event => setKeyword(event.target.value)} placeholder={placeholder} className="search__input"></input>
                <div onClick={clickSearchHandle} style={style} className="search__btn">Search</div>
            </div>
        </>
    }
}//error en style.btn y style.content ver en el else