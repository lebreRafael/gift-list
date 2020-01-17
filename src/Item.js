import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

function Item (props) {
  const {image, name, price} = props;

  return (
    <div className="item">
      <img alt={name} src={image}/>
      <span className="name">{name}</span>
      <span className="price">{'R$ ' + price}</span>
    </div>
  );
}

Item.propType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
