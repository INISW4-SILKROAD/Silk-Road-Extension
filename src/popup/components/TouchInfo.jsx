// import React from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   // 임시로 사용할 촉감 데이터 (1~5점)
//   const touchData = {
//     softness: 5, // 부드러움
//     smoothness: 3, // 매끄러움
//     thickness: 4, // 두꺼움
//     flexibility: 2, // 신축성
//   };

//   // 촉감별 대표 색상 설정
//   const colorMapping = {
//     softness: '#20edc7', 
//     smoothness: '#20edc7', 
//     thickness: '#20edc7', 
//     flexibility: '#20edc7' 
//   };

//   return (
//     <div className="touch-info">
//       <div className='touch-info-text'>
//         <h2>촉감 정보</h2>
//       </div>
//       <div className='touch-area'>
//         <div className="touch-bar">
//           <span>부드러움</span>
//           <div className="progress-bar-wrapper">
//             <ProgressBar
//               now={(touchData.softness / 5) * 100}
//               className="custom-progress-bar"
//               style={{
//                 backgroundColor: 'transparent',
//                 backgroundImage: `linear-gradient(to right, ${colorMapping.softness} 0%, ${colorMapping.softness} ${(touchData.softness / 5) * 100}%, #ffffff ${(touchData.softness / 5) * 100}%, #ffffff 100%)`
//               }}
//             />
//             <div className="ticks">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="touch-bar">
//           <span>매끄러움</span>
//           <div className="progress-bar-wrapper">
//             <ProgressBar
//               now={(touchData.smoothness / 5) * 100}
//               className="custom-progress-bar"
//               style={{
//                 backgroundColor: 'transparent',
//                 backgroundImage: `linear-gradient(to right, ${colorMapping.smoothness} 0%, ${colorMapping.smoothness} ${(touchData.smoothness / 5) * 100}%, #ffffff ${(touchData.smoothness / 5) * 100}%, #ffffff 100%)`
//               }}
//             />
//             <div className="ticks">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="touch-bar">
//           <span>두께</span>
//           <div className="progress-bar-wrapper">
//             <ProgressBar
//               now={(touchData.thickness / 5) * 100}
//               className="custom-progress-bar"
//               style={{
//                 backgroundColor: 'transparent',
//                 backgroundImage: `linear-gradient(to right, ${colorMapping.thickness} 0%, ${colorMapping.thickness} ${(touchData.thickness / 5) * 100}%, #ffffff ${(touchData.thickness / 5) * 100}%, #ffffff 100%)`
//               }}
//             />
//             <div className="ticks">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="touch-bar">
//           <span>신축성</span>
//           <div className="progress-bar-wrapper">
//             <ProgressBar
//               now={(touchData.flexibility / 5) * 100}
//               className="custom-progress-bar"
//               style={{
//                 backgroundColor: 'transparent',
//                 backgroundImage: `linear-gradient(to right, ${colorMapping.flexibility} 0%, ${colorMapping.flexibility} ${(touchData.flexibility / 5) * 100}%, #ffffff ${(touchData.flexibility / 5) * 100}%, #ffffff 100%)`
//               }}
//             />
//             <div className="ticks">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;


import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import '../css/TouchInfo.css';

const TouchInfo = ({ productId }) => {
  const [touchData, setTouchData] = useState({
    softness: 0,
    smoothness: 0,
    thickness: 0,
    flexibility: 0
  });

  const labelMapping = {
    softness: '부드러움',
    smoothness: '매끄러움',
    thickness: '두께',
    flexibility: '신축성'
  };

  useEffect(() => {
    if (productId) {
      const fetchTouchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
          const data = response.data;
          console.log("서버에서 받은 촉감 데이터:", data);

          if (data) {
            setTouchData({
              softness: data.SOFTNESS || 0,
              smoothness: data.SMOOTHNESS || 0,
              thickness: data.THICKNESS || 0,
              flexibility: data.FLEXIBILITY || 0
            });
          }
        } catch (error) {
          console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
        }
      };

      fetchTouchData();
    }
  }, [productId]);

  const colorMapping = {
    softness: '#20edc7',
    smoothness: '#20edc7',
    thickness: '#20edc7',
    flexibility: '#20edc7'
  };

  return (
    <div className="touch-info">
      <div className='touch-info-text'>
        <h2>촉감 정보</h2>
      </div>
      <div className='touch-area'>
        {Object.keys(touchData).map((key) => (
          <div key={key} className="touch-bar">
            <span>{labelMapping[key]}</span>
            <div className="progress-bar-wrapper">
              <ProgressBar
                now={(touchData[key] / 5) * 100}
                className="custom-progress-bar"
                style={{
                  backgroundColor: 'transparent',
                  backgroundImage: `linear-gradient(to right, ${colorMapping[key]} 0%, ${colorMapping[key]} ${(touchData[key] / 5) * 100}%, #ffffff ${(touchData[key] / 5) * 100}%, #ffffff 100%)`
                }}
              />
              <div className="ticks">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouchInfo;
