import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi' // Hi ae Directory che aema thi lidhu che // and react-icons ae pacage ma che // 
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className='hero-wraper'>
            <div className='paddings innerWidth flexCenter hero-cointaonr '>
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle' />
                        <h1>Discover <br /> Mot Suitable <br /> Property</h1>
                    </div>
                    <div className='flexColCenter hero-des'>
                        <span className='secondaryText'>Find a Varitety of Properties that suit you very Easily.</span>
                        <span className='secondaryText'>Find a Varitety of Properties that suit you very Easily.</span>
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type='text' />
                        <button className='button'>search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                                <br/>
                                <span className='secondaryText'>Primium Product</span>
                            </span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                                <br/>
                                <span className='secondaryText'>Happy Customers</span>
                            </span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                                <br/> 
                                <span className='secondaryText'>Award Wining</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flexCenter hero-right'>
                    <div className='image-cointainer'>
                        <img src='./hero-image.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
