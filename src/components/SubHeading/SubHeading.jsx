import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.needle} alt='needle' style={{width: '30px'}}></img>

  </div>
);

export default SubHeading;
