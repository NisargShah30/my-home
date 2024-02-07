import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react' // swiper pacage che // je complsary install krvu pdse // 
import "swiper/css"
import './Residense.css'
import data from '../../Utils/slider.json'
import { sliderSettings } from '../../Utils/Comman' // data aayo sliderSetting mathi // 
const Residense = () => {
    return (
        <section className='r-wrapper'>
            <div className='paddings innerWidth r-cointainer'>
                <div className='r-head flexColStart'>
                    <span className='orangeText'>Best Choise</span>
                    <span className='primaryText'>Popular Residense</span>
                </div>
                <Swiper {...sliderSettings}>
                <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart r-card'>
                                    <img src={card.image} alt='home' />
                                    <span className='secondaryText r-price'>
                                        <span style={{color:"orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residense
const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className='flexCenter r-button'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
