import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-cointainer'>
            {/* left Side  */}
            <div className='flexColCenter f-left'>
                <img src='./logo2.png' alt='' width={120}/>
                <span className='secondaryText'>
                    Our Vision to make all People <br/> the best place to live them
                </span>
            </div>

            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className=''>Hatan Kuva Near People's Benk, Gujrat, India</span>
                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Servisis</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
