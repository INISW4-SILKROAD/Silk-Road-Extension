import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './css/Main.css';
import TouchInfo from './components/TouchInfo';
import GoodsList from './components/GoodsList';
import Detail from './Detail';

const DetailWrapper = () => {
  const { id } = useParams();
  return <Detail productId={id} />;
};

const Main = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleImageClick = (id) => {
    setSelectedProductId(id);
    window.location.hash = `#/detail/${id}`;
  };

  return (
    <Router>
      <div className="popup-container">
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TouchInfo productId={selectedProductId} dataSource="model" />
                <GoodsList onImageClick={handleImageClick} />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
