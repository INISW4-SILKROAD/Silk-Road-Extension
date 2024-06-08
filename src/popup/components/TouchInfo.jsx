// import React from 'react';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   return (
//     <div className="touch-info">
//       <h2>촉감 정보</h2>
//       <div className="touch-bar">
//         <span>딱딱한</span>
//         <div className="bar red"></div>
//         <span>부드러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>거친</span>
//         <div className="bar green"></div>
//         <span>매끄러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>얇은</span>
//         <div className="bar blue"></div>
//         <span>두꺼운</span>
//       </div>
//       <div className="touch-bar">
//         <span>신축성 없는</span>
//         <div className="bar purple"></div>
//         <span>신축성 있는</span>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;

// import React from 'react';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   // 임시로 사용할 촉감 데이터 (1~5점)
//   const touchData = {
//     hardness: 3, // 딱딱함 정도
//     roughness: 2, // 거칠음 정도
//     thickness: 4, // 두꺼움 정도
//     elasticity: 5, // 신축성 정도
//   };

//   // 점수에 따른 색상 및 길이 설정
//   const getBarStyle = (score, color) => ({
//     width: `${(score / 5) * 100}%`,
//     backgroundColor: color,
//     opacity: score / 5,
//   });

//   return (
//     <div className="touch-info">
//       <h2>촉감 정보</h2>
//       <div className="touch-bar">
//         <span>딱딱한</span>
//         <div className="bar" style={getBarStyle(touchData.hardness, 'red')}></div>
//         <span>부드러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>거친</span>
//         <div className="bar" style={getBarStyle(touchData.roughness, 'green')}></div>
//         <span>매끄러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>얇은</span>
//         <div className="bar" style={getBarStyle(touchData.thickness, 'blue')}></div>
//         <span>두꺼운</span>
//       </div>
//       <div className="touch-bar">
//         <span>신축성 없는</span>
//         <div className="bar" style={getBarStyle(touchData.elasticity, 'purple')}></div>
//         <span>신축성 있는</span>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/TouchInfo.css';

const TouchInfo = () => {
  // 임시로 사용할 촉감 데이터 (1~5점)
  const touchData = {
    hardness: 1, // 딱딱함 정도
    roughness: 2, // 거칠음 정도
    thickness: 4, // 두꺼움 정도
    elasticity: 5, // 신축성 정도
  };

  // 점수에 따른 색상 설정
  const getBarColor = (score, color) => {
    const opacity = score / 5;
    const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${color}${hexOpacity}`;
  };

  // 촉감별 대표 색상 설정
  const colorMapping = {
    hardness: '#ff0000', // red
    roughness: '#00ff00', // green
    thickness: '#0000ff', // blue
    elasticity: '#800080' // purple
  };

  return (
    <div className="touch-info">
      <h2>촉감 정보</h2>
      <div className="touch-bar">
        <span>딱딱한</span>
        <div className="progress-bar-wrapper">
          <ProgressBar
            now={(touchData.hardness / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.hardness, colorMapping.hardness)} 0%, ${getBarColor(touchData.hardness, colorMapping.hardness)} ${(touchData.hardness / 5) * 100}%, #ffffff ${(touchData.hardness / 5) * 100}%, #ffffff 100%)`
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
            now={(touchData.roughness / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.roughness, colorMapping.roughness)} 0%, ${getBarColor(touchData.roughness, colorMapping.roughness)} ${(touchData.roughness / 5) * 100}%, #ffffff ${(touchData.roughness / 5) * 100}%, #ffffff 100%)`
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
            now={(touchData.elasticity / 5) * 100}
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.elasticity, colorMapping.elasticity)} 0%, ${getBarColor(touchData.elasticity, colorMapping.elasticity)} ${(touchData.elasticity / 5) * 100}%, #ffffff ${(touchData.elasticity / 5) * 100}%, #ffffff 100%)`
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
