import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiClothes } from 'react-icons/gi';


import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  
    const [toggleMenu, setToggleMenu] = useState(false);

    return (


      <nav className= 'app__navbar'>
        
        <div className='app__navbar-logo'> 
          <img src= {images.navBarLogo} alt="app logo"/>
        </div>
        <ul className='app__navbar-links'>
          <li className='p__opensans'> <a href='#about'>L'histoire</a> </li>
          <li className='p__opensans'> <a href='#options'>Nos options</a> </li>
          <li className='p__opensans'> <a href='#gallery'>Gallery</a> </li>
          <li className='p__opensans'> <a href='#contact'>Contact</a> </li>

        </ul>

        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}></GiHamburgerMenu>


          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'> 
              <GiClothes className='overlay__close' color='#fff' fontSize={27} onClick={()=> setToggleMenu(false)}></GiClothes>

              <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'> <a href='#about' onClick={()=> setToggleMenu(false)}>L'histoire</a> </li>
              <li className='p__opensans'> <a href='#options' onClick={()=> setToggleMenu(false)}>Nos options</a> </li>
              <li className='p__opensans'> <a href='#gallery' onClick={()=> setToggleMenu(false)}>Gallery</a> </li>
              <li className='p__opensans'> <a href='#contact'onClick={()=> setToggleMenu(false)} >Contact</a> </li>
              </ul>
            
            </div>
            )
          }
        </div>

      </nav>
    )
};

export default Navbar;
