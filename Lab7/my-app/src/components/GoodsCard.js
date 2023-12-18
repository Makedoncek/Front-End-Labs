import React from 'react';

const GoodsCard = (props) => {
  const { photo, name, price } = props;

  return (
    <div className="goods-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>Вартість: {price}</p>
    </div>
  );
};

export default GoodsCard;
