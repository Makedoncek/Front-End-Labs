import React, { useState } from 'react';
import '../../../components-styles/Image.css';
import ivanfran2 from '../../../pictures/ivanfran2.jpg'

function Image() {
  const [images, setImages] = useState([
    'https://iftravel.com.ua//assets/gallery/6/ivano-frankivska-oblast1_small.jpg'
  ]);
  
  const handleAddImage = () => { 
     
    const newImage = ivanfran2; 
    setImages((prevImages) => [...prevImages, newImage]);  
  };
  

  const handleIncreaseSize = () => {
    
    const imagesElements = document.querySelectorAll('#images-container img');
    imagesElements.forEach(image => {
      image.width += 10;
      image.height += 10;
    });
  };

  const handleDecreaseSize = () => {
    
    const imagesElements = document.querySelectorAll('#images-container img');
    imagesElements.forEach(image => {
      image.width -= 10;
      image.height -= 10;
    });
  };

  const handleDeleteImage = () => {
    
    if (images.length > 1) {
      const updatedImages = [...images];
      updatedImages.pop();
      setImages(updatedImages);
    }
  };

  return (
    <div>
      <div id="images-container">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Івано-Франківськ ${index + 1}`} />
        ))}
      </div>

      <div className="image-buttons">
        <button onClick={handleAddImage}>Додати зображення</button>
        <button onClick={handleIncreaseSize}>Збільшити</button>
        <button onClick={handleDecreaseSize}>Зменшити</button>
        <button onClick={handleDeleteImage}>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;
