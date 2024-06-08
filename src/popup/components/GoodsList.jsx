// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//       // 크롬 확장 프로그램 환경
//       chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//         if (response && response.error) {
//           console.error('Error fetching goods:', response.error);
//         } else if (response && response.data) {
//           setGoods(response.data);
//         }
//       });
//     } else {
//       // 로컬 개발 환경
//       fetch('http://localhost:5001/goods')
//         .then((response) => response.json())
//         .then((data) => setGoods(data))
//         .catch((error) => console.error('Error fetching goods:', error));
//     }
//   }, []);

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두꺼움</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={'/sample.png'} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
//             <p>{item.NAME}<span></span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoodsList;

import React, { useEffect, useState } from 'react';
import '../css/GoodsList.css';

const GoodsList = ({ onImageClick }) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
      // 크롬 확장 프로그램 환경
      chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
        if (response && response.error) {
          console.error('Error fetching goods:', response.error);
        } else if (response && response.data) {
          setGoods(response.data);
        }
      });
    } else {
      // 로컬 개발 환경
      fetch('http://localhost:5001/goods')
        .then((response) => response.json())
        .then((data) => setGoods(data))
        .catch((error) => console.error('Error fetching goods:', error));
    }
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
            <img src={'/sample.png'} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
            <p>{item.NAME}<span></span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
