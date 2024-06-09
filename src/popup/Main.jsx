import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './css/Main.css';
import TouchInfo from './components/TouchInfo';
import GoodsList from './components/GoodsList';
import Detail from './Detail';

const Main = () => {
  const handleImageClick = (id) => {
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
                <TouchInfo />
                <GoodsList onImageClick={handleImageClick} />
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
