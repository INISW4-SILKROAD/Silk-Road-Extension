import React from 'react';
import './css/Main.css';
import TouchInfo from './components/TouchInfo';
import GoodsList from './components/GoodsList';

const handleImageClick = () => {
    console.log('Image clicked!');
};

const Main = () => {
  return (
    <div className="popup-container">
      <TouchInfo />
      <GoodsList onImageClick={handleImageClick} />
    </div>
  );
};

export default Main;
