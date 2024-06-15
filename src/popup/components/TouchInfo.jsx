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
    softness: '#FFDBDA',
    smoothness: '#FFDBDA',
    thickness: '#FFDBDA',
    flexibility: '#FFDBDA'
  };

  return (
    <div className="touch-info">
      <div className='touch-info-text'>
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
