import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/images/Made_sjorsblack.png" height="75"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/kettingen'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                kettingen 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/oorbellen' className='nav-links' onClick={closeMobileMenu}>
              Oorbellen 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/armbanden'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Armbanden 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shoppingcard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <AiOutlineShoppingCart /> 
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
