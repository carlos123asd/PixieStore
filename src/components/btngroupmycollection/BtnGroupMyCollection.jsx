import imgEdit from '../../assets/image/edit.svg'
import imgDownload from '../../assets/image/download.svg'

export default function BtnGroupMyCollection({id}){

    const imgDownLoad = JSON.parse(localStorage.getItem(id))

    return <>
        <div className="btngroumycollection">
            <div className="btngroumycollection__edit">
                <img src={imgEdit} alt='I like it' className='btngroumycollection__edit__img'/>
            </div>

            <a href={imgDownLoad[0].links.download} target='_blanck' download>
                <div className="btngroumycollection__download">
                    <img src={imgDownload} alt='Download' className='btngroumycollection__download__img'/>
                </div>
            </a>
        </div>
    </>
}