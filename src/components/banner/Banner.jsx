import imgBanner from '../../assets/image/banner.png'
export default function Banner(){
    return <>
        <div style={{backgroundImage:`url(${imgBanner})`}} className="banner">
            <div className="banner__text">
                <h1 className="banner__text__tit">PixieStore</h1>
                <span className="banner__text__subtit">Beautiful, free images</span>
            </div>
        </div>
    </>
}