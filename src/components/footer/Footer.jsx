import imgTit from '../../assets/image/logo.svg'
import imgLink from '../../assets/image/linkedin.svg'

export default function Footer({width}){

    const contact = {
        nombre: 'Carlos Alexander Medina Salas',
        correo: 'carlos.med.dev@gmail.com',
        tel: '+36 616348947'
    }
    const style = {
        'font-family': 'inter-bold',
        'font-size': '1.13rem',
        'display': 'inline-block'
    }
    
    return <>
        <footer className="footer">
            <div className="footer__name">
                <img src={imgTit} alt='logo' className="footer__name__image"/>
                <span className="footer__name__text">PixieStore</span>
            </div>
            {width >= 1000 ? <div style={style}>{contact.nombre}<br/>{contact.correo}<br/>{contact.tel}</div> : null}
            <div style={{backgroundImage:`url(${imgLink})`}} className="footer__link"></div>
        </footer>
    </>
}