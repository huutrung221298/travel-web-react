import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import './Button.css'
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const handleClick = () => { return setClick(!click) };

  const closeMobileMenu = () => { return setClick(false) };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()

  },[]);

  window.addEventListener('resize', showButton);


  return (
    
      <div className="navbar">
        <div className="navbar-container">
          <a href="/" className='logo' onClick={closeMobileMenu}>
            TRVL <i className="fa-brands fa-typo3" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </div>
  
  )
}

export default Navbar
