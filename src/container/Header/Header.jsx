import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Crochet et tricot'/>
      <h1 className='app__header-h1'> Le tricot de la Mama</h1>
      <p className='p__opensans' style ={{margin: '2rem'}}>Details</p>
      <button type='button' className='custom__button'> <a href='#about'>Explore</a> </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.clothe} alt='knitting mom'></img> 
    </div>
  </div>
);

export default Header;
