import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/TouchInfo.css';

const TouchInfo = () => {
  // 임시로 사용할 촉감 데이터 (1~5점)
  const touchData = {
    softness: 1, // 부드러움
    smoothness: 2, // 매끄러움
    thickness: 4, // 두꺼움
    flexibility: 5, // 신축성
  };

  // 점수에 따른 색상 설정
  const getBarColor = (score, color) => {
    const opacity = score / 5;
    const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${color}${hexOpacity}`;
  };

  // 촉감별 대표 색상 설정
  const colorMapping = {
    softness: '#ff0000', // red
    smoothness: '#00ff00', // green
    thickness: '#0000ff', // blue
    flexibility: '#800080' // purple
  };

  return (
    <div className="touch-info">
      <h2>촉감 정보</h2>
      <div className="touch-bar">
        <span>단단한</span>
        <div className="progress-bar-wrapper">
          <ProgressBar
            now={(touchData.softness / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.softness, colorMapping.softness)} 0%, ${getBarColor(touchData.softness, colorMapping.softness)} ${(touchData.softness / 5) * 100}%, #ffffff ${(touchData.softness / 5) * 100}%, #ffffff 100%)`
            }}
          />
          <div className="ticks">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
            ))}
          </div>
        </div>
        <span>부드러운</span>
      </div>
      <div className="touch-bar">
        <span>거친</span>
        <div className="progress-bar-wrapper">
          <ProgressBar
            now={(touchData.smoothness / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.smoothness, colorMapping.smoothness)} 0%, ${getBarColor(touchData.smoothness, colorMapping.smoothness)} ${(touchData.smoothness / 5) * 100}%, #ffffff ${(touchData.smoothness / 5) * 100}%, #ffffff 100%)`
            }}
          />
          <div className="ticks">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
            ))}
          </div>
        </div>
        <span>매끄러운</span>
      </div>
      <div className="touch-bar">
        <span>얇은</span>
        <div className="progress-bar-wrapper">
          <ProgressBar
            now={(touchData.thickness / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.thickness, colorMapping.thickness)} 0%, ${getBarColor(touchData.thickness, colorMapping.thickness)} ${(touchData.thickness / 5) * 100}%, #ffffff ${(touchData.thickness / 5) * 100}%, #ffffff 100%)`
            }}
          />
          <div className="ticks">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
            ))}
          </div>
        </div>
        <span>두꺼운</span>
      </div>
      <div className="touch-bar">
        <span>신축성 없는</span>
        <div className="progress-bar-wrapper">
          <ProgressBar
            now={(touchData.flexibility / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.flexibility, colorMapping.flexibility)} 0%, ${getBarColor(touchData.flexibility, colorMapping.flexibility)} ${(touchData.flexibility / 5) * 100}%, #ffffff ${(touchData.flexibility / 5) * 100}%, #ffffff 100%)`
            }}
          />
          <div className="ticks">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
            ))}
          </div>
        </div>
        <span>신축성 있는</span>
      </div>
    </div>
  );
};

export default TouchInfo;
