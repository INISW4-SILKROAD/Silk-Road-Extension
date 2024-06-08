// import React from 'react';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';

// const handleImageClick = () => {
//     console.log('Image clicked!');
// };

// const Main = () => {
//   return (
//     <div className="popup-container">
//       <TouchInfo />
//       <GoodsList onImageClick={handleImageClick} />
//     </div>
//   );
// };

// export default Main;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';

// const Main = () => {
//   return (
//     <Router>
//       <div className="popup-container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/detail/:id" element={<Detail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();

//   const handleImageClick = (id) => {
//     navigate(`/detail/${id}`);
//   };

//   return (
//     <>
//       <TouchInfo />
//       <GoodsList onImageClick={handleImageClick} />
//     </>
//   );
// };

// export default Main;


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
