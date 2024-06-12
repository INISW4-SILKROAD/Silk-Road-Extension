// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//         // 크롬 확장 프로그램 환경
//         chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//           if (response && response.error) {
//             console.error('Error fetching goods:', response.error);
//           } else if (response && response.data) {
//             setGoods(Array.isArray(response.data) ? response.data : []);
//           }
//         });
//       } else {
//         // 로컬 개발 환경
//         try {
//           const response = await fetch('http://127.0.0.1:5001/goods');
//           const data = await response.json();
//           setGoods(Array.isArray(data) ? data : []);
//         } catch (error) {
//           console.error('Error fetching goods:', error);
//         }
//       }
//     };
//     fetchData();
//   }, []);


//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두께</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={"./sample2.jpeg"} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
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
    const fetchData = async () => {
      if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
          if (response && response.error) {
            console.error('Error fetching goods:', response.error);
          } else if (response && response.data) {
            setGoods(Array.isArray(response.data) ? response.data : []);
          }
        });
      } else {
        console.error('크롬 확장 프로그램 환경이 아닙니다.');
      }
    };
    fetchData();
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
          <div className="goods-item" key={item.product.ID}>
            <img src={`http://127.0.0.1:5001/images/${item.product.ID}`} alt={item.product.NAME} onClick={() => onImageClick(item.product.ID)} />
            <p>{item.product.NAME}<span></span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
