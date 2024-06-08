import React from 'react';
import '../css/TouchInfo.css';

const TouchInfo = () => {
  return (
    <div className="touch-info">
      <h2>촉감 정보</h2>
      <div className="touch-bar">
        <span>딱딱한</span>
        <div className="bar red"></div>
        <span>부드러운</span>
      </div>
      <div className="touch-bar">
        <span>거친</span>
        <div className="bar green"></div>
        <span>매끄러운</span>
      </div>
      <div className="touch-bar">
        <span>얇은</span>
        <div className="bar blue"></div>
        <span>두꺼운</span>
      </div>
      <div className="touch-bar">
        <span>신축성 없는</span>
        <div className="bar purple"></div>
        <span>신축성 있는</span>
      </div>
    </div>
  );
};

export default TouchInfo;