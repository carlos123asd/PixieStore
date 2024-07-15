import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { useNavigate } from 'react-router-dom';
import { addSelectData } from '../../features/imageSelected/imageSelectedSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function RelatedImageSlider() {
    const randomImages = useSelector(state => state.images.randomPhotos);
    console.log(randomImages)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const imageSelectedHandle = (id) => {
        dispatch(addSelectData(randomImages.filter((img) => {
            return img.id === id
        })))
    }

    return <>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='slider'
        >
            {randomImages.map((img) => {
                console.log(img)
                return <>
                    <SwiperSlide onClick={() => {
                                    imageSelectedHandle(img.id)
                                    navigate('/profile')
                                }}>
                        <img className='slider__img' src={img.urls.regular} alt={img.alt_description}/>
                    </SwiperSlide>
                </>
            })}
        </Swiper>
    </>
}