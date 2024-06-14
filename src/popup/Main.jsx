// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';

// const Main = () => {
//   const handleImageClick = (id) => {
//     window.location.hash = `#/detail/${id}`;
//   };

//   return (
//     <Router>
//       <div className="popup-container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <TouchInfo />
//                 <GoodsList onImageClick={handleImageClick} />
//               </>
//             }
//           />
//           <Route path="/detail/:id" element={<Detail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Main;



import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './css/Main.css';
import TouchInfo from './components/TouchInfo';
import GoodsList from './components/GoodsList';
import Detail from './Detail';

const DetailWrapper = () => {
  const { id } = useParams();
  return <Detail productId={id} />;
};

const Main = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleImageClick = (id) => {
    setSelectedProductId(id);
    window.location.hash = `#/detail/${id}`;
  };

  return (
    <Router>
      <div className="popup-container">
        <TouchInfo productId={selectedProductId} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GoodsList onImageClick={handleImageClick} />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
