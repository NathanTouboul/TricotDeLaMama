import React from 'react';

import {SubHeading} from "../../components"
import {images} from "../../constants"
import './Presentation.css';

const Presentation = () => (
  <div className='app__bg app__wrapper section__padding'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      {/* <img src={images.laMama} alt='mama'></img> */}
    </div>

    <div className='app_wrapper_info'>
      <SubHeading title="La Mama"></SubHeading>
      <h1 className='headtext__cormorant'> La meilleure couturiere </h1>
    

      <div className='app__presentation-content'>
      
        <div className='app__presentation-content_quote'>
          <img src={images.quote} alt="quote"></img>
          <p className='p__opensans'> first part quote </p>
          <p className='p__opensans'> second part quote </p>
        </div>
    
        <div className='app__presentation-sign'>
          <p>Michele Touboul</p>
          <p className='p__opensans'>Couturiere | La Mama</p>
          <img src={images.sign} alt='sign'></img>
        </div>

      </div>
    </div>
  </div>
);

export default Presentation;
