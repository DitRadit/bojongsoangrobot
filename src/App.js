import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import RobotDisplay from './pages/heroComponent/RobotDisplay';
import AboutUs from './pages/AboutUsPage';
import ContactUs from './pages/ContactUsPage';
import Product1 from './pages/product/product1';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product1" element={<Product1 />} />
    </Routes>
  );
};

export default App;
