import like from '../../assets/image/like.svg'

export default function CardInformation({img}) {
    return <>
        <div className='information'>
            <div className='information__head'>
                <div className='information__head__img'>
                    <img className='information__head__img__user' src={img.profileimage} alt={img.alt} />
                </div>

                <div className='information__head__profile'>
                    <span className='information__head__profile__name'>{img.nameUser}</span>
                    <span className='information__head__profile__views'>{`Views: ${img.views}`}</span>
                </div>

                <div className='information__head__likes'>
                    <div>
                        <span>
                            <img className='information__head__likes__icon' src={like} alt="likes" />{img.likes}
                        </span>
                    </div>
                </div>
            </div>

            <h3 className='information__titdetails'>Photo Details</h3>

            <div className='information__details'>
                    <div>
                        <span className='information__details__tit'>Resolution</span>
                        <span className='information__details__resolution'>{`${img.width} x ${img.height}`}</span>
                    </div>
                    <div>
                        <span className='information__details__tit'>Published date</span>
                        <span className='information__details__date'>{img.datepublication}</span>
                    </div>
            </div>
        </div>
    </>
}
/*profileimage: data[0].user.profile_image.small,
        nameUser: data[0].user.name,
        views: data[0].views,
        likes: data[0].likes,
        width: data[0].width,
        height: data[0].height,
        datepublication: data[0].created_at,
        alt: data[0].alt_description,
        description: data[0].description*/