import React from 'react';
import GoodsCard from './GoodsCard';
import vinland from '../../../pictures/vinland.jpg'
import assasination from '../../../pictures/assasination.jpg'
import attack from '../../../pictures/attack.jpg'
import berserk from '../../../pictures/berserk.jpg'
import chainsaw from '../../../pictures/chainsaw.jpg'
import classroom from '../../../pictures/classroom.jpeg'
import grand from '../../../pictures/grand.jpg'
import solo from '../../../pictures/solo.jpg'
import vinland from '../../../pictures/vinland.jpg'
import vinland from '../../../pictures/vinland.jpg'



const Gallery = () => {
  const goodsData = [
    { id: 1, photo: '../../../../public/pictures/vinland.jpg', name: 'Манга Vinland Saga', price: 100 },
    { id: 2, photo: '../../../../public/pictures/vinland.jpg', name: 'Манга Assasination Classroom', price: 150 },
    { id: 3, photo: '../../../../public/pictures/vinland.jpg', name: 'Манга Attack on Titan', price: 150 },
    { id: 4, photo: '../../../../public/pictures/vinland.jpg', name: 'Манга Berserk', price: 150 },
    { id: 5, photo: 'url-to-photo-2', name: 'Манга Chainsaw Man', price: 150 },
    { id: 6, photo: 'url-to-photo-2', name: 'Манга Classroom', price: 150 },
    { id: 7, photo: 'url-to-photo-2', name: 'Манга Grand Blue', price: 150 },
    { id: 8, photo: 'url-to-photo-2', name: 'Манга Solo Levelling', price: 150 },
  ];

  return (
    <div className="gallery">
      <h1>Магазин аніме манги</h1>
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
