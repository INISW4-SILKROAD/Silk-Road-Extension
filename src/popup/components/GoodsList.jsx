import React, { useEffect, useState } from 'react';
import '../css/GoodsList.css';

const GoodsList = ({ onImageClick }) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/goods')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched goods:', data);
        setGoods(data);
      })
      .catch((error) => console.error('Error fetching goods:', error));
  }, []);

  return (
    <div className="goods-list-container">
      <div className="category-buttons">
        <button className="category-button">부드러움</button>
        <button className="category-button">매끄러움</button>
        <button className="category-button">두꺼움</button>
        <button className="category-button">신축성</button>
      </div>
      <div className="goods-list">
        {goods.map((item) => (
          <div className="goods-item" key={item.ID}>
            <img src={item.image_url || '/sample.png'} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
            <p>{item.NAME}<span></span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
