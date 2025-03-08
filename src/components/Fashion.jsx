import React from 'react';

function Fashion({ images }) {
  return (
    <div>
      <h2>拍攝的照片</h2>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Captured ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Fashion;