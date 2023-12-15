// Image.js
import React from 'react';

function Image() {
  return (
    <div>
      <div id="images-container">
        <a href="https://www.mvk.if.ua">
          <img
            src="https://iftravel.com.ua//assets/gallery/6/ivano-frankivska-oblast1_small.jpg"
            alt="Івано-Франківськ"
          />
        </a>
      </div>

      <div className="image-buttons">
        <button>Додати зображення</button>
        <button>Збільшити</button>
        <button>Зменшити</button>
        <button>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;
