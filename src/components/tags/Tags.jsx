export default function Tags({width}){
    if(width < 1000){
        return <>
        <div className="content__tag">
            <div className="tag">
                <span className="tag__span">nature</span>
            </div>
        </div>
        </>
    }else{
        return <>
            <div className="content__tag">
                <div className="tag">
                    <span className="tag__span">nature</span>
                </div>
            </div>
        </>
    }
}