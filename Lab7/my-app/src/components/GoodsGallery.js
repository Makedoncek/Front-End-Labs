import React from 'react';
import GoodsCard from './GoodsCard';

const GoodsGallery = () => {
  const goodsData = [
    { photo: 'url1', name: 'Товар 1', price: 100 },
    { photo: 'url2', name: 'Товар 2', price: 150 },
    { photo: 'url2', name: 'Товар 3', price: 150 },
    { photo: 'url2', name: 'Товар 4', price: 150 },
    { photo: 'url2', name: 'Товар 5', price: 150 },
    { photo: 'url2', name: 'Товар 6', price: 150 },
    { photo: 'url2', name: 'Товар 7', price: 150 },
    { photo: 'url2', name: 'Товар 8', price: 150 }
];

  return (
    <div className="goods-gallery">
      {goodsData.map((goods, index) => (
        <GoodsCard key={index} {...goods} />
      ))}
    </div>
  );
};

export default GoodsGallery;
