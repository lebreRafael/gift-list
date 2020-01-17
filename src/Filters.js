import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import './Filters.css';

function Filters (props) {
  const nameRef = useRef();
  const priceMinRef = useRef();
  const priceMaxRef = useRef();

  const {setProductList} = props;

  const handleButtonClick = async () => {
    const name = nameRef.current.value;
    const priceMax = priceMaxRef.current.value;
    const priceMin = priceMinRef.current.value;

    const query = [];
    if (name) query.push('name=' + name);
    if (priceMax) query.push('priceMax=' + priceMax);
    if (priceMin) query.push('priceMin=' + priceMin);

    const response = await fetch('http://localhost:8080/products?' + query.join('&'));
    const jsonResponse = await response.json();
    setProductList(jsonResponse);
  };

  return (
    <div className="filters">
      <div className="input-wrapper">
        <label htmlFor="name">Nome</label>
        <input name="name" ref={nameRef} type="text"/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="priceMin">Preço</label>
        <input
          name="priceMin"
          placeholder="Mínimo"
          ref={priceMinRef}
          type="number"
        />
        <input
          name="priceMax"
          placeholder="Máximo"
          ref={priceMaxRef}
          type="number"
        />
      </div>
      <button onClick={handleButtonClick} type="button">Filtrar</button>
    </div>
  );
}

Filters.propType = {
  setProductList: PropTypes.func.isRequired,
};

export default Filters;
