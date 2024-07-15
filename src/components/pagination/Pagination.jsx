import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { imagesSearchThunk } from "../../features/images/imagesSearchThunk";


export default function Pagination({paginationNums}){
    //numero de imagenes presentadas (1-15) of 2000  paginas < 1/20 >
    let [pag,setPag] = useState(1);
    const dispatch = useDispatch()

    const next = () => {
        if(pag < paginationNums.totaldepaginas){
            let i = pag
            setPag(i+1)
        }
    }

    const back = () => {
        let i = pag
        if(pag > 1){
            setPag(i-1)
        }
    }

    const selectortypeSearch = useSelector(state => state.images.search)
    const SelectorQueryValue = useSelector(state => state.images.query) 

    useEffect(() => {
        if(selectortypeSearch){
            dispatch(imagesSearchThunk({
                type: 'search',
                'pag': pag,
                query: SelectorQueryValue
            }))
        }else{
            dispatch(imagesSearchThunk({
                type: 'random',
                'pag': pag
            }))
        }
    }, [pag]) 

    return <>
        <div className="pagination">
            <div className="pagination__presentimgs">
                <span className="pagination__presentimgs__num">{paginationNums.numerodeimagenes} of {paginationNums.totaldeimagenes} images</span> 
            </div>
            <div className="pagination__pag">
                <div className="pagination__pag__content">
                    <span onClick={back} className="pagination__pag__back">{'<'}</span>
                </div>
                <span className="pagination__pag__total"><span className="pagination__pag__actual">{pag} </span>/ {paginationNums.totaldepaginas}</span>
                <div className="pagination__pag__content">
                    <span onClick={next} className="pagination__pag__next">{'>'}</span>
                </div>
            </div>
        </div>
    </>
}
/*numerodeimagenes: imgsNum,
        totaldeimagenes: totalimages,
        totaldepaginas: totalpages*/