import imgBanner from '../../assets/image/banner.png'
import Search from '../search/Search'
export default function Banner({width}){
    return <>
        <div style={{backgroundImage:`url(${imgBanner})`}} className="banner">
            <div className="banner__text">
                <h1 className="banner__text__tit">PixieStore</h1>
                <span className="banner__text__subtit">Beautiful, free images</span>
            </div>
            {width >= 1000 ? <Search placeholder='Search free high-resolution photos'/> : null}
        </div>
    </>
}