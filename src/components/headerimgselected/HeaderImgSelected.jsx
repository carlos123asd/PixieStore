import 'atropos/atropos.css'
import Atropos from 'atropos/react'

export default function HeaderImageSelected({img, tit}){
    return <>
        <Atropos className="headerimgselected"
        activeOffset={40}
        shadowScale={1.05}>
            <div className="headerimgselected__content">
                <img className="headerimgselected__content__img" src={img} alt={tit}/>
                <h1 className="headerimgselected__content__tit">{tit}</h1>
            </div>
        </Atropos>
    </>
}