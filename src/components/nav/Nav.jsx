import imgTitle from '../../assets/image/logo.svg'
import imgLike from '../../assets/image/like.svg'
import imgHome from '../../assets/image/home.svg'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return <>
        <nav className="nav">
            <div className="nav__name">
                <img src={imgTitle} alt="logo" className="nav__name__image" />
                <span className="nav__name__text">PixieStore</span>
            </div>

            <div className="nav__btns">
                <NavLink to={'/myCollection'}>
                    <div className="nav__btns__content">
                        <img src={imgLike} alt='My Collection' className="nav__btns__like"/>
                    </div>
                </NavLink>
                <NavLink to={'/'}>
                    <div className="nav__btns__content">
                        <img src={imgHome} alt='Home Page' className="nav__btns__home"/>
                    </div>
                </NavLink>
            </div>
        </nav>
    </>
}