import imgEdit from '../../assets/image/edit.svg'
import imgDownload from '../../assets/image/download.svg'

export default function BtnGroupMyCollection(){
    return <>
        <div className="btngroumycollection">
            <div className="btngroumycollection__edit">
                <img src={imgEdit} alt='I like it' className='btngroumycollection__edit__img'/>
            </div>
            <div className="btngroumycollection__download">
                <img src={imgDownload} alt='Download' className='btngroumycollection__download__img'/>
            </div>
        </div>
    </>
}