import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/Detail.css';
import TouchInfo from './components/TouchInfo';

const Detail = ({ productId }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log(`Fetching product with ID: ${productId}`);
    fetch(`http://127.0.0.1:5001/goods/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('불러온 상품 :', data);
        setProduct(data);
      })
      .catch((error) => console.error('상품 불러오기 오류 :', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="navbar">
        <button className="back-button" onClick={() => navigate('/')}></button>
      </div>
      <div className="image-container">
        <img className="product-image" src={product.image_path} alt={product.NAME} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.NAME}</h1>
        <p className="price">{product.PRICE} 원</p>
      </div>
      <div className="tactile-info-container">
        <TouchInfo productId={productId} dataSource="search" />
      </div>
      <button className="view-product-button" onClick={() => window.open(product.LINK, '_blank')}>상품 보러가기</button>
    </div>
  );
};

export default Detail;