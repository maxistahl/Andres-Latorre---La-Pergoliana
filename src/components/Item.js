import React from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price }) => {
  /* aca tenemos nuestro Link */
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className={`item_card ${category}-category`}>
          <span>{name}</span>
          <span>
            <img src={image} alt={name} className={'small-img'} />
          </span>
          <span>${price}</span>
        </div>
      </Link>
      <ItemCount/>
    </>
  );
};
