export default function HeaderImageSelected({img, tit}){
    return <>
        <div className="headerimgselected">
            <div className="headerimgselected__content">
                <img className="headerimgselected__content__img" src={img} alt={tit}/>
                <h1 className="headerimgselected__content__tit">{tit}</h1>
            </div>
        </div>
    </>
}