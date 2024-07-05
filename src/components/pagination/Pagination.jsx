export default function Pagination({numImgs, numPags}){
    //numero de imagenes presentadas (1-15) of 2000  paginas < 1/20 >
    return <>
        <div className="pagination">
            <div className="pagination__presentimgs">
                <span className="pagination__presentimgs__num">1-100 of 1.864.574 images</span> 
            </div>
            <div className="pagination__pag">
                <div className="pagination__pag__content">
                    <span className="pagination__pag__back">{'<'}</span>
                </div>
                <span className="pagination__pag__total"><span className="pagination__pag__actual">1 </span>/ 20</span>
                <div className="pagination__pag__content">
                    <span className="pagination__pag__next">{'>'}</span>
                </div>
            </div>
        </div>
    </>
}