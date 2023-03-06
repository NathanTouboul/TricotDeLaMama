import React from 'react';

import './Item.css';

const Item = ({title, price, tags}) => (
  <div className='app__item'>
    <div className='app__item-head'>
      <div className='app__item-name'> 
      <p className='p__cormorant' style={{color: "#DCCA87"}}> {title} </p>
      </div>

      <div className='app__item-dash'/>

      <div className='app__item-price'> 
      <p className='p__cormorant'> {price} </p>
      </div>
      
    </div>

    <div className='app__item-sub'>
      <p className='p__opensans' style={{color: "#AAA"}}> {tags} </p>
    </div>
  </div>
);

export default Item;
