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
import astro from '../../../pictures/astro.jpg'
import fairy from '../../../pictures/fairy.jpg'
import gintama from '../../../pictures/gintama.jpg'
import jujutsu from '../../../pictures/jujutsu.jpg'
import hunter from '../../../pictures/hunter.jpg'
import naruto from '../../../pictures/naruto.jpg'
import pluto from '../../../pictures/pluto.jpg'
import monster from '../../../pictures/monster.jpg'
import owari from '../../../pictures/owari.jpeg'
import kimetsu from '../../../pictures/kimetsu.jpg'
import '../../../components-styles/Gallery.css'



const Gallery = () => {
  const goodsData = [
    { id: 1, photo: vinland, name: 'Манга "Vinland Saga"', price: 100 },
    { id: 2, photo: assasination, name: 'Манга "Assasination Classroom"', price: 150 },
    { id: 3, photo: attack, name: 'Манга "Attack on Titan"', price: 150 },
    { id: 4, photo: berserk, name: 'Манга "Berserk"', price: 150 },
    { id: 5, photo: chainsaw, name: 'Манга "Chainsaw Man"', price: 150 },
    { id: 6, photo: classroom, name: 'Манга "Classroom"', price: 150 },
    { id: 7, photo: grand, name: 'Манга Grand Blue', price: 150 },
    { id: 8, photo: astro, name: 'Манга Astro Boy', price: 150 },
    { id: 9, photo: fairy, name: 'Манга Fairy Tail', price: 150 },
    { id: 10, photo: gintama, name: 'Манга Gintama', price: 150 },
    { id: 11, photo: jujutsu, name: 'Манга Jujutsu Kaisen', price: 150 },
    { id: 12, photo: hunter, name: 'Манга Hunter x Hunter', price: 150 },
    { id: 13, photo: naruto, name: 'Манга Naruto', price: 150 },
    { id: 14, photo: pluto, name: 'Манга Pluto', price: 150 },
    { id: 15, photo: monster, name: 'Манга Monster', price: 150 },
    { id: 16, photo: solo, name: 'Манга Solo Levelling', price: 150 },
    { id: 17, photo: owari, name: 'Манга Owari no Seraph', price: 150 },
    { id: 18, photo: kimetsu, name: 'Манга Kimetsu no Yaiba', price: 150 },

   
    
  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">Магазин аніме манги</h1>
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
