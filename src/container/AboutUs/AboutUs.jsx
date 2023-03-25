import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

      <div className='app__aboutus-overlay flex__center'>
    </div>

    <div className='app__aboutus-content flex__center'>
    
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'> La petite histoire </h1>
        <img src={images.needle} style={{width: '50px'}} alt = 'about_needle'></img>
        <p className='p__opensans'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
      </div>
    
      <div className='app__aboutus-content_wool flex__center'>
        <img src={images.knitting} alt='about_wool'></img>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'> L'art du crochet</h1>
        <img src={images.needle} style={{width: '50px'}} alt = 'history_needle'></img>
        <p className='p__opensans'>  Le createur de ce site n'y connait rien, mais petard c'est joli!</p>
      </div>
    
    </div>
  </div>
);

export default AboutUs;
