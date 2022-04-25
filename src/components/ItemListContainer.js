import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import data from '../assets/data';
import { Link, } from 'react-router-dom';

/* import de useParams para traer el parametro de la URL */
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  /* para ponerle un loader */
  const [loading, setLoading] = useState(true);

  /* aca desestructuramos lo que trae useParams. el nombre es lo mismo que pusimos nosotros en la URL como parametro */
  const { catId } = useParams();

  useEffect(() => {
    /* ponemos el loader como true para que muestre el "CARGANDO" cada vez que se re-renderiza*/
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        /* aca filtramos por categoria usando un ternario. si catId tiene datos filtra, sino trae todos los productos del array */
        const myData = catId
          ? data.filter((item) => item.category === catId)
          : data;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  /* aca usamos renderizado condicional para mostrar el loader o nuestros productos */
  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <Link to={`/`}>volver</Link>
      <h3 style={{ textAlign: 'center' }}>{catId}</h3>
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;