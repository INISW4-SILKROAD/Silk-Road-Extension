// 라우팅 관리
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GoodsList from './components/GoodsList';
import Detail from './Detail';

const GoodsListWrapper = () => {
  const navigate = useNavigate();
  const handleImageClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return <GoodsList onImageClick={handleImageClick} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoodsListWrapper />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
