import React, {useEffect, useState} from 'react';
import Filters from './Filters';
import Item from './Item';

import './List.css';

function List () {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:8080/products');
      const jsonResponse = await response.json();
      setProductList(jsonResponse);
    };
    loadData();
  }, [setProductList]);

  const renderItems = () => {
    if (!productList) return (<span>Carregando</span>);
    if (productList.length === 0) return (<span>Nenhum produto encontrado</span>);

    return productList.map((data) => {
      const {_id, ...rest} = data;
      return (
        <Item {...rest} key={_id} />
      );
    })
  };

  return (
    <div className="list">
      <Filters setProductList={setProductList}/>
      <div className="items">
        {renderItems()}
      </div>
    </div>
  );
}

export default List;
