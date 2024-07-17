import { useDispatch, useSelector } from "react-redux";
import { selectChangeHeigthHide, selectChangeHeigthShow, selectChangeWidthHide, selectChangeWidthShow } from "../../features/style/styleContentImageSlice";
import { desactiveSlice, setDataFilters, setStateSelect } from "../../features/select/selectSlice";

export default function SelectFilter(){
    const dispatch = useDispatch();
    const selectorWidthMax = useSelector(state => state.select.max)
    const selectorWidthMin = useSelector(state => state.select.min)
    const selectorHeigthMax = useSelector(state => state.select.max)
    const selectorHeigthMin = useSelector(state => state.select.min)
    const selectorStateSelect = useSelector(state => state.select.state)
    const dataLocalStorage = []
    for(let i = 0; i < localStorage.length; i++){
        dataLocalStorage.push((JSON.parse(localStorage.getItem(localStorage.key(i))))[0])
    }
    let resultSelect = [];

    const selected = (value) => {
        if(value === 'normal'){
            dispatch(selectChangeHeigthHide());
            dispatch(selectChangeWidthHide());
            dispatch(desactiveSlice());
            dispatch(setStateSelect('normal'));
        }else if(value === 'trend'){
            dispatch(selectChangeHeigthHide());
            dispatch(selectChangeWidthHide());
            dispatch(desactiveSlice());
            dispatch(setStateSelect('trend'));
        }else if(value === 'width') {
            dispatch(selectChangeWidthShow());
            dispatch(selectChangeHeigthHide());
            dispatch(setStateSelect('width'));
        }else if(value === 'heigth'){
            dispatch(selectChangeHeigthShow());
            dispatch(selectChangeWidthHide());
            dispatch(setStateSelect('heigth'));
        }
    }

    if(selectorStateSelect === 'normal'){
        resultSelect = dataLocalStorage
        dispatch(setDataFilters(resultSelect));
    }else if(selectorStateSelect === 'trend'){
        let aux = []
        let aux2 = []
        let aux3 = []
        let trend = [];
        //ORDENAMOS EL ARRAY CON LIKE
        for (let i = 0; i < dataLocalStorage.length; i++) {
            trend.push([dataLocalStorage[i].likes,dataLocalStorage[i].id]) 
            aux.push(dataLocalStorage[i].likes)
        }
        aux = aux.sort(function(a, b){return b - a});

        //ORDENAMOS EL ARRAY CON LIKES Y ID
        for(let i = 0; i < aux.length; i++){
            for(let j = 0; j < trend.length; j++){
                if(trend[j][0] === aux[i]){
                    aux2.push(trend[j])
                }
            }
        }

        //ORDENAMOS EL RESULTADO EN OBJETOS
        for(let i = 0; i < aux2.length; i++){
            for(let j = 0; j < dataLocalStorage.length; j++){
                if(dataLocalStorage[j].likes === aux2[i][0] && dataLocalStorage[j].id === aux2[i][1]){
                    aux3.unshift(dataLocalStorage[j])
                }
            }
        }
        resultSelect = aux3
        console.log(resultSelect);
        dispatch(setDataFilters(resultSelect));
    }else if(selectorStateSelect === 'width'){
        resultSelect = dataLocalStorage.filter((imgItemData) => {
            return imgItemData.width > selectorWidthMin && imgItemData.width < selectorWidthMax
        })
        dispatch(setDataFilters(resultSelect));
    }else if(selectorStateSelect === 'heigth'){
        resultSelect = dataLocalStorage.filter((imgItemData) => {
            return imgItemData.height > selectorHeigthMin && imgItemData.height < selectorHeigthMax
        })
        dispatch(setDataFilters(resultSelect));
    }

    return <>
    <div className="content">
        <select onChange={(event) => selected(event.target.value)} className="select">
                <option value='normal'>Order By</option>
                <option value='trend'>Trending</option>
                <option value='width'>Width</option>
                <option value='heigth'>Heigth</option>
        </select>
    </div>
    </>
}