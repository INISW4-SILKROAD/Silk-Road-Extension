import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import '../css/TouchInfo.css';
import io from 'socket.io-client';

const TouchInfo = ({ productId, dataSource }) => {
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
    const fetchTouchData = async () => {
      try {
        if (dataSource === 'model') {
          const socket = io('http://127.0.0.1:5001');
          socket.emit('joinRoom', productId);
          socket.on('touchInfo', (data) => {
            console.log('Received touchInfo:', data);
            setTouchData({
              softness: data.touchInfo[0],
              smoothness: data.touchInfo[1],
              thickness: data.touchInfo[2],
              flexibility: data.touchInfo[3]
            });
          });
        } else if (dataSource === 'search') {
          const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
          const data = response.data;
          console.log('Received touchData:', data);
          setTouchData({
            softness: data.SOFTNESS + 1,
            smoothness: data.SMOOTHNESS + 1,
            thickness: data.THICKNESS + 1,
            flexibility: data.FLEXIBILITY + 1
          });
        } else if (dataSource === 'json') {
          const response = await axios.get('http://127.0.0.1:5001/touchinfo');
          const touchInfo = response.data;
          console.log('Fetched touch data from JSON file:', touchInfo);
          setTouchData({
            softness: touchInfo[0],
            smoothness: touchInfo[1],
            thickness: touchInfo[2],
            flexibility: touchInfo[3]
          });
        }
      } catch (error) {
        console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchTouchData();
  }, [productId, dataSource]);

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
