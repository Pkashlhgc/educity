import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [mobileMenu, setMobileMenu]=useState(false)

  const toggleMenu=()=>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>

        <li><Link to="programs" smooth={true} offset={0} duration={-260}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={0} duration={-150}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={0} duration={-260}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={0} duration={-260}>Testimonials</Link></li>
        <li>
          <Link to="Contact Us" smooth={true} offset={0} duration={-260} className="btn">
            Contact Us</Link></li>
          
        
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
