import imgLike from '../../assets/image/like.svg'
import imgDownload from '../../assets/image/download.svg'

export default function BtnGroupHome(){
    return <>
        <div className="btngrouphome">
            <div className="btngrouphome__like">
                <img src={imgLike} alt='I like it' className='btngrouphome__like__img'/>
            </div>
            <div className="btngrouphome__download">
                <img src={imgDownload} alt='Download' className='btngrouphome__download__img'/>
            </div>
        </div>
    </>
}