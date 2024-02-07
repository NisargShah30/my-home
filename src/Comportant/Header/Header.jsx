import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'



const Header = () => {
  const [menuOpen, setMenuOpened] = useState(false) // by defult false che 
  const getMenuStyles = (menuOpen) =>{
    if(document.documentElement.clientWidth <= 800){ //
      return {right: !menuOpen && "-100%"} // menuOpened right side thi -100%
    }

  }
  return (
    <div>
      <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-cointainer'>
          <img src='./logo.png' alt='logo' width={100} />

           <OutsideClickHandler
           onOutsideClick={()=>{
            setMenuOpened(false)
           }}
           
           >
          <div className='flexCenter h-menu'
          style={getMenuStyles(menuOpen)}
          >
            <a href=''>Residensis</a>
            <a href=''>Our Value</a>
            <a href=''>Contect Us</a>
            <a href=''>Get Started</a>
            <button className='button'><a href=''>Contect</a></button>
          </div>
          </OutsideClickHandler>
          <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
          {/* menu icon click krish tyare setmenuopened prev kato not prev  */}
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
