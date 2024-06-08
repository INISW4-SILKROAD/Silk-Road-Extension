// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/Detail.css';
// import TouchInfo from './components/TouchInfo';

// const Detail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const productData = {
//     "3143788": {
//       image: "https://image.msscdn.net/images/goods_img/20230313/3143788/3143788_17159297698722_500.jpg",
//       category: "상의 &gt; 후드 티셔츠",
//       name: "에센셜 후드 스웻 셔츠",
//       color: "MELANGE GREY",
//       price: "37000 원"
//     },
//     // 다른 상품 데이터 추가
//   };

//   const product = productData[id];

//   if (!product) {
//     return <div>상품 정보를 찾을 수 없습니다.</div>;
//   }

//   const handleViewProductClick = () => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="detail-container">
//       <div className="image-container">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-info">
//         <p className="category">{product.category}</p>
//         <h1 className="product-name">{product.name}<span>({product.color})</span></h1>
//         <p className="price">{product.price}</p>
//       </div>
//       <div className="tactile-info-container">
//         <h2>촉감 정보</h2>
//         <TouchInfo />
//       </div>
//       <button className="view-product-button" onClick={handleViewProductClick}>상품 보러가기</button>
//     </div>
//   );
// };

// export default Detail;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/Detail.css';
import TouchInfo from './components/TouchInfo';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/goods?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }

  const handleViewProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="detail-container">
      <div className="image-container">
        <img src={product.image_url || '/sample.png'} alt={product.NAME} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.NAME}</h1>
        <p className="price">{product.PRICE}</p>
      </div>
      <div className="tactile-info-container">
        <h2>촉감 정보</h2>
        <TouchInfo />
      </div>
      <button className="view-product-button" onClick={handleViewProductClick}>상품 보러가기</button>
    </div>
  );
};

export default Detail;
