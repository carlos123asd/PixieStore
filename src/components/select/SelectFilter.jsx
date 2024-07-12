export default function SelectFilter(){
    const normal = [];
    let trend = [];
    const width = [];
    const heigth = [];
    const selected = (value) => {
         //order normal
         let aux = 0
        for(let i = 0; i < localStorage.length; i++){
            normal.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        console.log('STANDAR',normal);
        //localStorage.clear
        if(value === 'normal'){
            //setStorage(normal,'normal')
        }else if(value === 'trend'){
            for (let i = 0; i < normal.length; i++) {
                trend.push(normal[i][0].likes)
            }
            trend = trend.sort(function(a, b){return b - a});
            console.log(trend);
            setStorage(trend,'trend')
        }
    }

    const setStorage = (date,action) => {
        let aux = []
        if(action === 'normal'){
            for(let i = 0; i < date.length; i++){
                //localStorage.setItem(date[i][0].id,date[i])
            }
        }else if(action === 'trend'){
            for(let i = 0; i < normal.length; i++){
                for(let j = 0; j < date.length; j++){
                    if(date[j] === normal[i][0].likes){
                        console.log(normal[i][0]);
                        aux.push(normal[i][0]);
                    }
                }
            }
        }//CONSEGUIR TREND
        console.log('AUXILIAR',aux);
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