import React from 'react';
import ItemCount from "./ItemCount"

const ItemDetail = ({
  id,
  name,
  category,
  image,
  description,
  price,
}) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>${price}</h2>
      </section>
      <ItemCount/>
    </div>
  );
};

export default ItemDetail;
