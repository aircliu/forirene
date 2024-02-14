import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Irene from './pages/Irene';
import IreneVideo from './pages/Irenevideo'; // Adjust the import path as necessary
import Irenevid2 from './pages/Irenevid2'; // Adjust the import path as necessary
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Irene />} />
        <Route path="/video" element={<IreneVideo />} />
        <Route path="/countdown" element={<Irenevid2 />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
