import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {images} from '../../constants'

import './Footer.css';


const Footer = () => {
  
  const today = new Date();

  return (
    <div className='app__footer app__bg section__padding' id='contact'>

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contactez nous</h1>
          <p className='p__opensans'>06 25 20 45 06</p>
          <p className='p__opensans'>micheletouboul@club-internet.fr</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.navBarLogo} alt='laMamaLogo'></img>
          <p className='p__opensans'>"Psahtek ma fille"</p>
          <img src={images.needle} alt='needle' className="needle__img"></img>
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        
        </div>
        {/* <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Contactez nous</h1>
          <p className='p__opensans'>06 25 20 45 06</p>
          <p className='p__opensans'>micheletouboul@club-internet.fr</p>
        </div> */}
      
      </div>

      <div className='footer__copyright'>
        <p className='p__cormorant' > {today.getFullYear() } - Le tricot de La Mama  </p>
      </div>
    </div>
  )
}
export default Footer;
