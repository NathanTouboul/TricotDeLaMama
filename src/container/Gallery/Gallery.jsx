import React from 'react';

import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Gallery.css';

const galleryImages = [
  images.pullWhite,
  images.bagBlack,
  images.head1,
  images.bagPink, 
  images.bagRed,
  images.head2,
  ];

const Gallery = () => {
  
   const scrollRef = React.useRef(null);
   const scroll = (direction)=> {
    const {current} = scrollRef;

    if (direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
   }
  return(
    <div className='app__gallery flex__center' id='gallery'>

      <div className='app__gallery-content'>
        <SubHeading title='De nombreuses options'> </SubHeading>
        <h1 className='headtext__cormorant'> Photo Gallery </h1>
        <p className='p__opensans' style =  {{color: '#AAA', marginTop: '2rem'}}> De magnifiques vêtements et accessoires fait main. </p>
        <button type='button' className='custom__button'> Lien vers l'instagram </button>
      </div>

      <div className='app__gallery-images'>
        
        <div className='app__gallery-images_container' ref={scrollRef}>
          
          { galleryImages.map((image, index) => (

            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery'></img>
              <BsInstagram className='gallery__image-icon'></BsInstagram>
            </div>
          
          ))}
          
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}></BsArrowLeftShort>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}></BsArrowRightShort>
        </div>

      </div>
    
    </div>
  );
}
export default Gallery;
