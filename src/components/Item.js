import React from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const Item = ({ id, name, category, image, price,stock }) => {
  return (
    <div className= "item">
      <Link to={`/product/${id}`}>
        <div className="item_card">
          <span>{name}</span>
          <span>
            <img src={image} alt={name} className={'small-img'} />
          </span>
          <span>${price}</span>
        </div>
      </Link>
      <ItemCount id={id} stock={stock} price={price}/>
    </div>
  );
};

export default Item;

