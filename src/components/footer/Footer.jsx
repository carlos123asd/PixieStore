import imgTit from '../../assets/image/logo.svg'
import imgLink from '../../assets/image/linkedin.svg'

export default function Footer(){
    return <>
        <footer className="footer">
            <div className="footer__name">
                <img src={imgTit} alt='logo' className="footer__name__image"/>
                <span className="footer__name__text">PixieStore</span>
            </div>
            <div style={{backgroundImage:`url(${imgLink})`}} className="footer__link"></div>
        </footer>
    </>
}