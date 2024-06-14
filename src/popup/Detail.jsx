// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/Detail.css';
// import TouchInfo from './components/TouchInfo';

// const Detail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5001/goods/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="detail-container">
//       <div className="navbar">
//         <button className="back-button" onClick={() => navigate('/')}></button>
//       </div>
//       <div className="image-container">
//         <img className="product-image" src={product.image_path} alt={product.NAME} />
//       </div>
//       <div className="product-info">
//         <h1 className="product-name">{product.NAME}</h1>
//         <p className="price">{product.PRICE} 원</p>
//       </div>
//       <div className="tactile-info-container">
//         <TouchInfo />
//       </div>
//       <button className="view-product-button" onClick={() => window.open(product.LINK, '_blank')}>상품 보러가기</button>
//     </div>
//   );
// };

// export default Detail;



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
        console.log('Fetched product data:', data);
        setProduct(data);
      })
      .catch((error) => console.error('Error fetching product:', error));
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
        <TouchInfo productId={productId} />
      </div>
      <button className="view-product-button" onClick={() => window.open(product.LINK, '_blank')}>상품 보러가기</button>
    </div>
  );
};

export default Detail;
