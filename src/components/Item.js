import React from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const Item = ({ id, name, category, image, price }) => {
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

export default Item;

