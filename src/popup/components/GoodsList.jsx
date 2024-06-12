import React, { useEffect, useState } from 'react';
import '../css/GoodsList.css';

const GoodsList = ({ onImageClick }) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchData = async (gids) => {
      try {
        const response = await fetch('http://127.0.0.1:5001/fetch-goods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ gids })
        });
        const data = await response.json();
        setGoods(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching goods:', error);
      }
    };

    if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
        if (response && response.error) {
          console.error('Error fetching goods:', response.error);
        } else if (response && response.data) {
          const gids = response.data.map(item => item.gid);
          fetchData(gids);
        }
      });
    } else {
      console.error('크롬 확장 프로그램 환경이 아닙니다.');
    }
  }, []);

  return (
    <div className="goods-list-container">
      <div className="category-buttons">
        <button className="category-button">부드러움</button>
        <button className="category-button">매끄러움</button>
        <button className="category-button">두께</button>
        <button className="category-button">신축성</button>
      </div>
      <div className="goods-list">
        {goods.map((item) => (
          <div className="goods-item" key={item.ID}>
            <img src={item.image_path} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
            <p>{item.NAME}<span></span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
