import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { useNavigate } from 'react-router-dom';
import { store } from '../../app/store';
import { addSelectData } from '../../features/imageSelected/imageSelectedSlice';

export default function RelatedImageSlider({imgs}) {

    const navigate = useNavigate()

    const imageSelectedHandle = (id) => {
        store.dispatch(addSelectData(imgs.filter((img) => {
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
            {imgs.map((img) => {
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