import imgTitle from '../../assets/image/logo.svg'
import imgLike from '../../assets/image/like.svg'
import imgHome from '../../assets/image/home.svg'

export default function Nav() {
    return <>
        <nav className="nav">
            <div className="nav__name">
                <img src={imgTitle} alt="logo" className="nav__name__image" />
                <span className="nav__name__text">PixieStore</span>
            </div>

            <div className="nav__btns">
                <div className="nav__btns__content">
                    <img src={imgLike} alt='My Collection' className="nav__btns__like"/>
                </div>

                <div className="nav__btns__content">
                    <img src={imgHome} alt='Home Page' className="nav__btns__home"/>
                </div>
            </div>
        </nav>
    </>
}