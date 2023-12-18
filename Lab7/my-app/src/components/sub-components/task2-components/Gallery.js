import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const goodsData = [
    { id: 1, photo: 'url-to-photo-1', name: 'Товар 1', price: 100 },
    { id: 2, photo: 'url-to-photo-2', name: 'Товар 2', price: 150 },
    // Додайте інші товари за потребою
  ];

  return (
    <div className="gallery">
      <h1>Галерея товарів</h1>
      <div className="goods-list">
        {goodsData.map((goods) => (
          <GoodsCard
            key={goods.id}
            photo={goods.photo}
            name={goods.name}
            price={goods.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
