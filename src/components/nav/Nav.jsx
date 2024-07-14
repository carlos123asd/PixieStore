import imgTitle from '../../assets/image/logo.svg'
import imgLike from '../../assets/image/like.svg'
import imgHome from '../../assets/image/home.svg'
import { NavLink } from 'react-router-dom'
import Search from '../search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { activeBorderNav, desactiveBorderNav } from '../../features/style/styleContentImageSlice'


export default function Nav({width, style, path}) {
    const dispatch = useDispatch()
    const selectorAllDesactiveBorder = useSelector(state => state.styleImages.btnNav.all)
    let stylePatchActiveNav
    if(selectorAllDesactiveBorder){
         stylePatchActiveNav = {
            border: 'none'
        }
    }else{
         stylePatchActiveNav = {
            border: '2px solid black'
        }
    }
    
    console.log(path)
    if(path === '/'){
        dispatch(activeBorderNav())
    }else if(path === '/myCollection'){
        dispatch(desactiveBorderNav())
    }
    
    const stateStyleBorderBtnNavHome = useSelector(state => state.styleImages.btnNav.home)

    return<>
        <nav className="nav">
            {(width >= 1000 && path === '/profile') ? <div className="nav__name" style={style.name.content}>
                <img src={imgTitle} alt="logo" className="nav__name__image" />
                <span className="nav__name__text">PixieStore</span>
            </div> : <div className="nav__name">
                <img src={imgTitle} alt="logo" className="nav__name__image" />
                <span className="nav__name__text">PixieStore</span>
            </div>}
            

            {(width >= 1000 && path === '/profile') ? <Search placeholder={'Search'} style={style.search} path={path} width={width}/> : null} 

            {
                stateStyleBorderBtnNavHome ? 
                    <div className="nav__btns">
                        <NavLink to={'/myCollection'}>
                            <div className="nav__btns__content">
                                <img src={imgLike} alt='My Collection' className="nav__btns__like"/>
                            </div>
                        </NavLink>
                        <NavLink to={'/'}>
                            <div className="nav__btns__content" style={stylePatchActiveNav}>
                                <img src={imgHome} alt='Home Page' className="nav__btns__home"/>
                            </div>
                        </NavLink>
                    </div>   
                :
                    <div className="nav__btns">
                        <NavLink to={'/myCollection'}>
                            <div className="nav__btns__content" style={stylePatchActiveNav}>
                                <img src={imgLike} alt='My Collection' className="nav__btns__like"/>
                            </div>
                        </NavLink>
                        <NavLink to={'/'}>
                            <div className="nav__btns__content">
                                <img src={imgHome} alt='Home Page' className="nav__btns__home"/>
                            </div>
                        </NavLink>
                    </div>
            }
        </nav>
    </>
}