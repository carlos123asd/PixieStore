import { useNavigate } from "react-router-dom";
import { imagesSearchThunk } from "../../features/images/imagesSearchThunk";
import { useDispatch } from 'react-redux'
import { setQuery, setSearch } from "../../features/images/imagesSlice";
export default function Tags(){

    const tagsName = ['nature','wallpapers','people','business','food','flowers','animals','beach','city','car'] 
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const searchKeyWord = (keyword) => {
        console.log(keyword)
        dispatch(setSearch(true))
        dispatch(setQuery(keyword))
        dispatch(imagesSearchThunk({
            type: 'search',
            'pag': 1,
            query: keyword
        }))
        
        navigate('/')
    }
        return <>
            <div className="content__tag">
                {
                    tagsName.map((name) => {
                        return <>
                            <div onClick={() => searchKeyWord(name)} className="tag">
                                <span className="tag__span">{name}</span>
                            </div>
                        </>
                    })
                }
            </div>
        </>
}