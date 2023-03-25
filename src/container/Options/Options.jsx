import React from 'react';

import { SubHeading, Item } from '../../components';
import { images, data } from '../../constants';

import './Options.css';

const Options = () => (
  <div className='app__options flex__center section__padding' id='options'>
    
    <div className='app__options-title'>
      <SubHeading title="Du textile de qualite"></SubHeading>
      <h1 className='headtext__cormorant'> De superbe options  </h1>
    </div>

    <div className='app__options-option'>


      <div className='app__options-option_clothes'>
        <p className='app__options-option_heading'> Vetements </p>
        <div className='app__options_option_item'> 
          {data.clothes.map((clothe, index) => 
            <Item key={clothe.title + index}  title={clothe.title} price={clothe.price} tags={clothe.tags}></Item>
          )}
        </div>
      </div>
        
      <div className='app__options-option_img'>
        <img src={images.clothe} alt='option'></img>
      </div>
      
      
      <div className='app__options-option_accessories'>
        <p className='app__options-option_heading'> Accessoires </p>
        <div className='app__options_option_item'> 
          {data.accessories.map((accessory, index) => 
            <Item key={accessory.title + index}  title={accessory.title} price={accessory.price} tags={accessory.tags}></Item>
          )}
        </div>
    
      </div>
        
   
 
 
    </div>
  
    <div style={{marginTop: "15px"}}>
      <button type='button' className='custom__button' > <a href='#gallery'>Gallery</a> </button>
    </div>
  </div>  
);

export default Options;
