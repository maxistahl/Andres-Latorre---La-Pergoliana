import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail  from './ItemDetail';
import data from '../assets/data';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = data.find((item) => item.id === itemId);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail {...product} />;
};

export default ItemDetailContainer;